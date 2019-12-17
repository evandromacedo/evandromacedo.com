---
title: Active navigation links in many routes with Gatsby Link and Styled Components
description: And why activeClassName and activeStyle are not enough.
date: 2019-12-15 03:56:23
tags: ['react', 'gatsby', 'styled components']
image: desert.jpg
---

Gatsby has a powerful built-in `<Link>` component that prefetch resources from internal links and boosts tons of performance on your application, among other useful features. However, this component is not perfect when we are talking about styling your navigation links, even with the `activeClassName` and `activeStyle` functionalities.

## The problem

To understand the problem, let's pretend we are building a blog about cooking. Our home page will be a list of recipes. We have a `Nav` component with a bunch of links. We will use the `activeClassName` prop together with Styled Components:

```jsx
// components/Nav/index.js
import React from 'react'
import { NavWrapper, NavList, NavListItem, NavListLink } from './styled'

const Nav = () => (
  <NavWrapper>
    <NavList>
      <NavListItem>
        <NavListLink to="/" activeClassName="active">
          Recipes
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink to="/favorites/" activeClassName="active">
          Favorites
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink to="/about/" activeClassName="active">
          About
        </NavListLink>
      </NavListItem>
      <NavListItem>
        <NavListLink to="/contact/" activeClassName="active">
          Contact
        </NavListLink>
      </NavListItem>
    </NavList>
  </NavWrapper>
)

export default Nav
```

<!-- prettier-ignore -->
```jsx
// components/Nav/styled.js
import styled from "styled-components"
import { Link } from "gatsby"

export const NavWrapper = styled.nav`/* Some nav styles */`
export const NavList = styled.ul`/* Some list styles */`
export const NavListItem = styled.li`/* Some list item styles */`

export const NavListLink = styled(Link)`
  color: blue;
  text-decoration: none;

  &.active {
    color: cadetblue;
    text-decoration: underline;
  }
`
```

Ok. At the moment, we have our links being styled when they are active especifically in this routes: `/`, `/favorites/`, `/about/` and `/contact/`. So let's suppose we have created a bunch of recipes and their routes are custom slugs like it's done at [Gatsby's reference guide](https://www.gatsbyjs.org/docs/programmatically-create-pages-from-data/).

The routes would be things like `/the-best-swedish-meatballs`, `/how-to-cook-chicken` or `/what-to-cook-this-december`. Those pages are a recipe's post explaining how to prepare some food, so we would like to maintain the _Recipes_ navigation link active to inform the user they are still in a page related to recipes. However, at the moment the user leaves the home page and enters into some internal recipe's page, the `activeClassName` for the _Recipes_ doesn't work because we are not at `/` anymore, and that's the right thing.

So, how in the hell could we maintain the _Recipes_ navigation link active?!?!

---

## Understanding the Gatsby Link

At the [documentation of Gatsby Link API](https://www.gatsbyjs.org/docs/gatsby-link/) we can see that this component is a wrapper around the [Reach Router's Link component](https://reach.tech/router/api/Link), and it comes with a prop called `getProps` that can help us solve the problem. This prop accepts a callback with three useful information for us:

- `isCurrent` - true if the location.pathname is exactly the same as the anchor’s href.
- `isPartiallyCurrent` - true if the location.pathname starts with the anchor’s href.
- `location` - the app’s location.

> The object returned from this function results in attributes for the anchor tag in the DOM. It's not returned as props for the component. The method name `getProps` is a little bit confusing.

To get around the _Recipes_ trouble described earlier, we can use the `location` argument in our favor.

## Creating a wrapper for `<Link>`

Let's create another level of abstraction for this component. We won't use the `activeClassName` prop anymore, but the `getProps` to set some `className` in our link.

We'll create a component called `RecipesLink` that will set an `active` class if the current pathname is the home `/` or any other `/some-recipe-post`. To do that so, we need to exclude all other paths that won't set the _Recipes_ active, and they are the rest: `/favorites/`, `/about/` and `/contact/`.

```jsx
// components/Nav/RecipesLink.js
import React from 'react'
import { Link } from 'gatsby'

const invalidPaths = ['/favorites/', '/about/', '/contact/']

const isActive = ({ location }) => {
  if (!invalidPaths.includes(location.pathname)) {
    return { className: 'active' }
  }

  return null
}

const RecipesLink = ({ children, ...props }) => (
  <Link getProps={isActive} {...props}>
    {children}
  </Link>
)

export default RecipesLink
```

> If you try to use `window.location.pathname` directly in the component it will break in `gatsby build` because there is no `window` object in the build process. And if you try to be clever and use the `typeof window !== 'undefined' && window.location.pathname` trick, it will malfunction because the component doesn't listen to changes on the global `window` object anyway. Yep, I've tried this before. Only the Reach Route's location do the right work.

And in the `Nav` we'll use this component instead of the Gatsby's `<Link>` for _Recipes_. We don't need the `activeClassName` anymore because we are setting the `active` class in the component itself:

<!-- prettier-ignore -->
```jsx{4,10-12}
// components/Nav/index.js
import React from 'react'
import { NavWrapper, NavList, NavListItem, NavListLink } from "./styled"
import RecipesLink from './RecipesLink'

const Nav = () => (
  <NavWrapper>
    <NavList>
      <NavListItem>
        <RecipesLink to="/">
          Recipes
        </RecipesLink>
      </NavListItem>
      {/* The other links (...) */}
    </NavList>
  </NavWrapper>
)

export default Nav
```

The other links will remain as they are. Now we can create some solutions for styling the links on Styled Components. There are numerous ways to style these links, feel free to do your way if the two below doesn't fit for you.

### First solution: use `<li>` to style all links

A simple way. We can use our `<ListItem>` to style its child anchor tags. It will be applied to the `RecipesLink` as well as the other links:

<!-- prettier-ignore -->
```jsx{8,19}
// components/Nav/styled.js
import styled from 'styled-components'
import { Link } from 'gatsby'

export const NavWrapper = styled.nav`/* Some nav styles */`
export const NavList = styled.ul`/* Some list styles */`

export const NavListItem = styled.li`
  & > a {
    color: blue;
    text-decoration: none;

    &.active {
      color: cadetblue;
      text-decoration: underline;
    }
  }
`
export const NavListLink = styled(Link)``
```

This is a fast solution, however, if you want to straight style the recipes' link this way `styled(RecipesLink)` instead of using a child selector `& > a`, you can follow with the second solution.

### Second solution: style `RecipesLink` directly

To do that, we need to make some changes in the component. We cannot simply do a `styled(RecipesLink)`. Why?

Styled Components do their work using CSS classes, right? And [according to the documentation](https://www.styled-components.com/docs/basics#styling-any-component):

> The styled method works perfectly on all of your own or any third-party component, **as long as they attach the passed className prop to a DOM element**.

The problem is that the `getProps` prop from Reach Router **erases all the current `classNames`** from the component when you return a `{ className: 'active' }`. If we have only an `active` class on the component, the styles provided by Styled Components will not be applied anymore.

But we can work around this just doing some JavaScript _currying_ on the `isActive` method. We can store the initial class names setted by Styled Components by returning another function. Here is the magic:

```jsx{7-12,14-15}
// components/Nav/RecipesLink.js
import React from 'react'
import { Link } from 'gatsby'

const invalidPaths = ['/favorites/', '/about/', '/contact/']

const isActive = className => ({ location }) => {
  const activeClassName = { className: `${className} active` }

  if (!invalidPaths.includes(location.pathname)) return activeClassName
  return { className }
}

const RecipesLink = ({ className, children, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {children}
  </Link>
)

export default RecipesLink
```

With `isActive(className)`, we store the initial value of `className` and just add an `active` class when necessary, without erasing the previous classes. And when the link is not active, we maintain the styles with `return { className }` instead of `return null`.

Now we can style our links using `css` from Styled Components to reuse the same styles on both links:

<!-- prettier-ignore -->
```jsx
// components/Nav/styled.js
import styled, { css } from 'styled-components' // highlight-line
import { Link } from 'gatsby'
import RecipesLinkComponent from './RecipesLink' // highlight-line

export const NavWrapper = styled.nav`/* Some nav styles */`
export const NavList = styled.ul`/* Some list styles */`
export const NavListItem = styled.li`/* Some list item styles */`

// highlight-next-line
const baseLinkStyles = css`

  color: blue;
  text-decoration: none;

  &.active {
    color: cadetblue;
    text-decoration: underline;
  }
`
// highlight-next-line
export const RecipesLink = styled(RecipesLinkComponent)`

  ${baseLinkStyles}
`
// highlight-next-line
export const NavListLink = styled(Link)`

  ${baseLinkStyles}
`
```

And we change the `Nav` to use our new `RecipesLink` from `./styled`:

<!-- prettier-ignore -->
```jsx
// components/Nav/index.js
import React from 'react'
import { NavWrapper, NavList, NavListItem, NavListLink, RecipesLink } from "./styled" // highlight-line

const Nav = () => (
  <NavWrapper>
    <NavList>
      <NavListItem>
        // highlight-range{1-3}
        <RecipesLink to="/">
          Recipes
        </RecipesLink>
      </NavListItem>
      {/* The other links (...) */}
    </NavList>
  </NavWrapper>
)

export default Nav
```

And that's it. You can check a live version of this implementation on CodeSandbox if you want:

[![Edit sad-antonelli-ybuvp](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/sad-antonelli-ybuvp?fontsize=14&hidenavigation=1&module=%2Fsrc%2Fcomponents%2FNav%2Findex.js&theme=dark)

---

## Matching child routes

Another approach for solving these issues is to use child routes, also known as _greedy active links_. But we must create all recipes on routes starting with `/recipes/`, like `/recipes/how-to-cook-chicken`, and all these routes will make our _Recipes_ navigation link active.

### Using `isPartiallyCurrent`

We can use the `isPartiallyCurrent` property as described earlier. Our `RecipesLink` would be something like:

```jsx
// components/Nav/RecipesLink.js
import React from 'react'
import { Link } from 'gatsby-link'

const isActive = className => ({ isPartiallyCurrent }) => ({
  className: className + (isPartiallyCurrent ? ' active' : ''),
})

const RecipesLink = ({ className, children, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {children}
  </Link>
)

export default RecipesLink
```

However, our recipes couldn't be on the route `/` anymore. Another page should be replaced for the home, or we could replicate the `/pages/recipes.js` on `/pages/index.js`, and both pages `/` and `/recipes/` would render the recipes.

Regardless, to work properly, our _Recipes_ navigation link would change to:

<!-- prettier-ignore -->
```jsx
<RecipesLink to="/recipes/">
  Recipes
</RecipesLink>
```

### Using `isCurrent` and `location.pathname`

Out of the `isPartiallyCurrent` property, we also have the `isCurrent` which is true when we are on the exact route. We could use this one together with `location.pathname` to match both `/` and `/recipes/how-to-cook-chicken` routes:

```jsx
// components/Nav/RecipesLink.js
import React from 'react'
import { Link } from 'gatsby-link'

const isActive = className => ({ isCurrent, location }) => {
  const activeClassName = { className: `${className} active` }

  if (isCurrent) return activeClassName
  if (location.pathname.startsWith('/recipes/')) return activeClassName
  return { className }
}

const RecipesLink = ({ className, children, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {children}
  </Link>
)

export default RecipesLink
```

This way we would maintain our _Recipes_ navigation link as before:

<!-- prettier-ignore -->
```jsx
<RecipesLink to="/">
  Recipes
</RecipesLink>
```

However, there wouldn't exist a `/recipes/` route on your application unless you replicate it again like we did before when using `isPartiallyCurrent`.

---

## Conclusion

There are various and various ways to solve those navigation link issues. All of them have their pros and cons. I think it's important to find the one that fits well in your application to provide the best user experience, instead of just using the `activeClassName` on all navigation links to match exact routes.
