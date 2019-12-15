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

Ok. At the moment, we have our links being styled when they are active especifically in this routes: `/`, `/favorites/`, `/about/` and `/contact/`. So let's suppose we have created a bunch of recipes and their pathnames are custom slugs like it's done at [Gatsby's reference guide](https://www.gatsbyjs.org/docs/programmatically-create-pages-from-data/).

The paths would be things like `/the-best-swedish-meatballs`, `/how-to-cook-chicken` or `/what-to-cook-this-december`. Those pages are a recipe's post explaining how to prepare some food, so we would like to maintain the _Recipes_ navigation link active to inform the user they are still in a page related to recipes. However, at the moment the user leaves the home page and enters into some internal recipe's page, the `activeClassName` for the _Recipes_ doesn't work because we are not at `/` anymore, and this is right.

So, how in the hell could we maintain the _Recipes_ navigation link active?!?!

---

## Understanding the Gatsby Link

At the [documentation of Gatsby Link API](https://www.gatsbyjs.org/docs/gatsby-link/) we can see that this component is a wrapper around the [Reach Router's Link component](https://reach.tech/router/api/Link), and it comes with a prop called `getProps` that can help us solve the problem. This prop accepts a callback with three useful information for us:

- `isCurrent` - true if the location.pathname is exactly the same as the anchor’s href.
- `isPartiallyCurrent` - true if the location.pathname starts with the anchor’s href.
- `location` - the app’s location.

The object returned from this function results in custom attributes for the anchor tag in the DOM.

To get around the _Recipes_ trouble described earlier, we can use the `location` argument in our favor.

## Creating a wrapper for `<Link>`

Let's create another level of abstraction for this component. We won't use the `activeClassName` prop anymore, but the `getProps` to set some `className` in our link.

We'll create a component called `RecipesNavLink` that will set an `active` class if the current pathname is the home `/` or `/some-recipe-post`. To do that so, we need to exclude all other paths that won't set the _Recipes_ active, and they are the rest: `/favorites/`, `/about/` and `/contact/`.

```jsx{numberLines: true}
// components/RecipeNavLink/index.js
import React from 'react'
import { Link } from 'gatsby-link'

const invalidPaths = ['/favorites/', '/about/', '/contact/']
const activeClass = { className: 'active' }

const isActive = ({ location }) => {
  if (!invalidPaths.includes(location.pathname)) return activeClass
  return null
}

const RecipesNavLink = props => (
  <Link getProps={isActive} {...props}>
    {props.children}
  </Link>
)

export default RecipesNavLink
```

And in the `Nav` component we'll use this component instead of the Gatsby's `<Link>` (just for the _Recipes_ link), and modify the rest of them to use the Gatsby's `<Link>` instead of the Styled Components:

```jsx{numberLines: true}
// components/Nav/index.js
import React from 'react'
import { Link } from 'gatsby'
import { Nav, List, ListItem, Link } from './styled'
import RecipesNavLink from '../RecipesNavLink'

const Nav = () => (
  <Nav>
    <List>
      <ListItem>
        <RecipesNavLink to="/">Recipes</RecipesNavLink>
      </ListItem>
      <ListItem>
        <Link to="/favorites/" activeClassName="active">
          Favorites
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/about/" activeClassName="active">
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/contact/" activeClassName="active">
          Contact
        </Link>
      </ListItem>
    </List>
  </Nav>
)

export default Nav
```
