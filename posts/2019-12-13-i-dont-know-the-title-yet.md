---
title: I don't know the title yet
description: Neither the description
date: '2019-12-13 06:16:21'
tags:
  - gatsby
  - react
  - styled components
---

Gatsby has a powerful built-in `<Link>` component that prefetch resources from internal links and boosts tons of performance on your application, among other useful features. However, this component is not perfect when we are talking about styling your navigation links, even with the `activeClassName` and `activeStyle` functionalities.

## The problem

To understand the problem, let's pretend we are building a blog about cooking. Our home page will be a list of recipes. We have a `Nav` component with a bunch of links. We will use the `activeClassName` feature together with Styled Components:

```jsx{numberLines: true}
// components/Nav/index.js
import React from 'react'
import { Nav, List, ListItem, Link } from './styled'

const Nav = () => (
  <Nav>
    <List>
      <ListItem>
        <ListLink to="/" activeClassName="active">
          Recipes
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/favorites/" activeClassName="active">
          Favorites
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/about/" activeClassName="active">
          About
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink to="/contact/" activeClassName="active">
          Contact
        </ListLink>
      </ListItem>
    </List>
  </Nav>
)

export default Nav
```

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/styled.js
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`/* Some nav styles */`
export const List = styled.ul`/* Some list styles */`
export const ListItem = styled.li`/* Some list item styles */`

export const ListLink = styled(Link)`
  color: blue;
  text-decoration: none;

  &.active {
    color: cadetblue;
    text-decoration: underline;
  }
`
```

Ok. At the moment, we have our links being styled when they are active especifically in this routes: `/`, `/favorites/`, `/about/` and `/contact/`. So let's suppose we have created a bunch of recipes and their routes are custom slugs like it's done at [Gatsby's reference guide](https://www.gatsbyjs.org/docs/programmatically-create-pages-from-data/).

The routes would be things like `/the-best-swedish-meatballs`, `/how-to-cook-chicken` or `/what-to-cook-this-december`. Those pages are a recipe's post explaining how to prepare some food, so we would like to maintain the _Recipes_ navigation link active to inform the user they are still in a page related to recipes. However, at the moment the user leaves the home page and enters into some internal recipe's page, the `activeClassName` for the _Recipes_ doesn't work because we are not at `/` anymore, and this is right.

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

We'll create a component called `RecipesNavLink` that will set an `active` class if the current pathname is the home `/` or any other `/some-recipe-post`. To do that so, we need to exclude all other paths that won't set the _Recipes_ active, and they are the rest: `/favorites/`, `/about/` and `/contact/`.

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/RecipesNavLink.js
import React from 'react'
import { Link } from 'gatsby-link'

const invalidPaths = ['/favorites/', '/about/', '/contact/']

const isActive = ({ location }) => {
  if (!invalidPaths.includes(location.pathname)) {
    return { className: 'active' }
  }

  return null
}

const RecipesNavLink = props => (
  <Link getProps={isActive} {...props}>
    {props.children}
  </Link>
)

export default RecipesNavLink
```

And in the `Nav` component we'll use this component instead of the Gatsby's `<Link>` (just for the _Recipes_ link). For this link we don't need the `activeClassName` anymore because we are already setting the `.active` in the component itself:

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/index.js
import React from 'react'
import { Nav, List, ListItem, ListLink } from './styled'
import RecipesNavLink from './RecipesNavLink'

const Nav = () => (
  <Nav>
    <List>
      <ListItem>
        <RecipesNavLink to="/">
          Recipes
        </RecipesNavLink>
      </ListItem>
      {/* The other links (...) */}
    </List>
  </Nav>
)

export default Nav
```

This will change only the behavior of the _Recipes_ link, and the other ones will continue to be `.active` only when they match the exact route.

Now we can create some solutions for styling the links on Styled Components:

### First solution: use `<li>` to style all links

The simplest way. We can use our `<ListItem>` to style its child anchor tags. It will be applied to the `RecipesNavLink` as well as the other links:

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/styled.js
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Nav = styled.nav`/* Some nav styles */`
export const List = styled.ul`/* Some list styles */`

export const ListItem = styled.li`
  & > a {
    color: blue;
    text-decoration: none;

    &.active {
      color: cadetblue;
      text-decoration: underline;
    }
  }
`

export const ListLink = styled(Link)``
```

This is the fastest way. However, if you want to straight style the `RecipesNavLink` like we did before on _ListLink_ `styled(Link)` instead of using a child selector `& > a`, you can follow with the second solution.

### Second solution: style `RecipesNavLink` directly

To do that, we'll need to make some changes in the component. We cannot simply do a `styled(RecipesNavLink)`. Why?

Styled Components do the work using CSS classes, right? And [according to the documentation](https://www.styled-components.com/docs/basics#styling-any-component):

> The styled method works perfectly on all of your own or any third-party component, as long as they attach the passed className prop to a DOM element.

The problem is that the `getProps` prop from Reach Router **erases all the current `classNames`** from the component when you return a `{ className: 'active' }`. If we have only a `.active` class on the component, the styles provided by Styled Components will not be applied anymore.

But we can work around this just doing some JavaScript currying on the `isActive` method. We can save the initial classes setted by Styled Components by returning another function. Here is the magic:

```jsx{numberLines: true}
// components/Nav/RecipesNavLink.js
import React from 'react'
import { Link } from 'gatsby-link'

const invalidPaths = ['/favorites/', '/about/', '/contact/']

const isActive = className => ({ location }) => {
  const activeClassName = { className: `${className} active` }

  if (!invalidPaths.includes(location.pathname)) return activeClassName
  return { className }
}

const RecipesNavLink = ({ className, ...props }) => (
  <Link getProps={isActive(className)} {...props}>
    {props.children}
  </Link>
)

export default RecipesNavLink
```

With `isActive(className)`, we store the initial value of `className` and just add an `active` class when necessary, without erasing the previous classes. And when the link is not active, we maintain the styles with `return { className }` instead of `return null`.

Now we can style our links using `css` from Styled Components to reuse the styles:

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/styled.js
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import RecipesNavLink from './RecipesNavLink'

export const Nav = styled.nav`/* Some nav styles */`
export const List = styled.ul`/* Some list styles */`
export const ListItem = styled.li`/* Some list item styles */`

const baseLinkStyles = css`
  color: blue;
  text-decoration: none;

  &.active {
    color: cadetblue;
    text-decoration: underline;
  }
`

export const RecipesLink = styled(RecipesNavLink)`
  ${baseLinkStyles}
`

export const ListLink = styled(Link)`
  ${baseLinkStyles}
`
```

And we change the `Nav` to use our new `RecipesLink` from `./styled`:

<!-- prettier-ignore -->
```jsx{numberLines: true}
// components/Nav/index.js
import React from 'react'
import { Nav, List, ListItem, ListLink, RecipesLink } from './styled'

const Nav = () => (
  <Nav>
    <List>
      <ListItem>
        <RecipesLink to="/">
          Recipes
        </RecipesLink>
      </ListItem>
      {/* The other links (...) */}
    </List>
  </Nav>
)

export default Nav
```

And that's it. We have solved a specific case of activating links on multiple routes. Another approach for solving these issues is to use child routes


---

## Another way
