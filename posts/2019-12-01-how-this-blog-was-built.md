---
title: How this blog was built
description: The decisions made and technologies used behind this blog
date: 2019-12-01 17:02:00
tags: ['personal', 'gatsby']
image: '/assets/img/cover-small.png'
---

First, the repository of this blog is [open-source](https://github.com/evandromacedo/evandromacedo.com), so you can explore the code for the things described here. Second, this stack is fully inspired in [Willian Justen's stack](https://willianjusten.com.br/making-of-blog-novo/). If you understand portuguese and want to learn all these technologies, [he has an entire course](https://www.udemy.com/course/gatsby-crie-um-site-pwa-com-react-graphql-e-netlify-cms/?ranMID=39197&ranEAID=16ht5juwidA&ranSiteID=16ht5juwidA-iL5YMJd.vOOyQpz3pyqUhw&LSNPUBID=16ht5juwidA) about this.

---

## The design

Before I talk about code, I'll briefly talk about the design. First of all, the general UI of this blog was inspired by newspapers layout:

![Newspaper](/newspaper.jpg)

The whole design was made using [Sketch](https://www.sketch.com/). I usually follow these steps when I'm building a layout:

1. Do some research to find what I want.
1. Create a wireframe for mobile and desktop.
1. Create a _Styleguide_ page and...
1. Define the color pallet that will be used in light and dark (if exists) mode.
1. Define the typography and its styles (like headline, subtitle, body, caption, etc.).
1. Create an _Assets_ page and put everything that will be used there, like backgrounds and icons.
1. Create a layout for mobile with less than 480px, then will expanding 'till desktop layout.

![Blog's layout](/blog-layout.jpg)

Generally I change some things when I start to code and see the results on the browser.

---

## Gatsby

This site is powered by [Gatsby](https://www.gatsbyjs.org/) which is an amazing framework for generating static sites. It uses [React](https://reactjs.org/) as front-end library, and [GraphQL](https://graphql.org/) to consume content and assets. To better understand what Gatsby does:

- First it pulls data from many data sources (CMSs, Markdown, APIs, etc.) with GraphQL.
- With data in hands, we create components and templates with React.
- When the work is done, Gatsby builds everything into static HTML, CSS and JS files.
- With static files you can deploy your site easily on dozens of services. Gatsby now has its own [Gatsby Cloud service](https://www.gatsbyjs.com/cloud/).

Gatsby does a great work on performance, loading only the critical content and prefetching data for internal links. It is also very safe because everything is static, so you won't have any trouble with things like _SQL Injection_. And the main advantage of Gatsby is that you are working with cutting edge technologies and have an awesome _developer experience_. Other than that, it has an excellent documentation and a great community, so almost every problem you have probably has been solved by someone.

The framework uses a pluggable ecosystem and [there is a plugin](https://www.gatsbyjs.org/plugins/) for everything you want. Below are some plugins I used:

### Gatsby Image

[gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) provides a complete image optimization for your application, from image processing to advanced loading techniques. Among all the features, the ones that I like the most are the image resizing according to the device, lazy loading and the _blur-up_ technique that shows a preview of the image while it loads.

### Markdown and PrismJS

I use Markdown to write the posts of this blog. The [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) plugin parses all Markdown files and makes them available on GraphQL for you to use on your components.

To add syntax highlighting on posts' code blocks, I use PrismJS with the [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) plugin.

### PWA

The [default Gatsby starter](https://github.com/gatsbyjs/gatsby-starter-default) comes with two plugins that handles all PWA stuff for you:

- [gatsby-plugin-manifest](https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/): generates the web app manifest.
- [gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline/): creates a service worker and loads it into the client.

With these 2 plugins you turn your site into a PWA with literally some lines of JSON configurations.

### Google Analytics and Sitemap

[gatsby-plugin-google-analytics](https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/) inserts the Google Analytics script in your application. And the [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) creates a `/sitemap.xml` file when your site is running in production mode.

## Styled Components

Styled Components is the most popular CSS-in-JS library out there. It uses tagged template literals to style your React components and generates unique class names so you don't have to worry about CSS conflicts. I use [Kitze's](https://twitter.com/thekitze) way of importing Styled Components under the `S.` namespace:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Experimenting with something. Importing all styled components under the S namespace. <br><br>Pros: <br>🙄️ don&#39;t have to import each component separately<br>👌️ visual distinction between a styled component, and an actual component<br>🤖️ autocomplete when typing S.<br><br>Cons:<br>¯\_(ツ)_/¯ <a href="https://t.co/mkeLvnK918">pic.twitter.com/mkeLvnK918</a></p>&mdash; Kitze (@thekitze) <a href="https://twitter.com/thekitze/status/989110942096117768?ref_src=twsrc%5Etfw">April 25, 2018</a></blockquote>

### styled-media-query

I aaalways forget the CSS syntax for media queries, so I use the [styled-media-query](https://github.com/morajabi/styled-media-query)'s beautiful methods like `lessThan(breakpoint)`. I also use `generateMedia()` to standardize the CSS breakpoints in one place and reuse elsewhere. I use the common `large`, `medium` and `small` breakpoints for general styles, but I also like to set specific breakpoints for some components. I believe that some components need more flexibility on breakpoints to deliver the better responsiveness as possible. So I define breakpoints like these ones:

<!-- prettier-ignore -->
```jsx
import { generateMedia } from 'styled-media-query'

const mediaQuery = generateMedia({
  large: '1170px',
  medium: '768px',
  small: '480px',
  header: '848px',
  socialLinks: '960px',
  mastheadInfo: '416px',
  paginationText: '360px'
})

export default mediaQuery
```

And in the Styled Components I use them this way:

```jsx
import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'

export const SocialLinksList = styled.ul`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
  grid-auto-columns: 3.2rem;
  align-items: center;
  list-style: none;

  ${mediaQuery.lessThan('socialLinks')`
    grid-auto-flow: row;
  `}
`
```

## Algolia

The search functionality of this site is powered by [Algolia](https://www.algolia.com/). It's very fast and provides some features like query suggestions, typo tolerance, search by synonyms and custom rankings by attributes. It also has a powerful analytics tool that tells you the popular searches, geographical origin of the searches, no-results rate and more.

I know that some applications (like e-commerce) can take more advantage of Algolia compared to this blog, but it's for free to personal projects so it's a good fit for me.

## Deploy - Netlify and NetlifyCMS

Probably the easiest thing I did when building this site. [Netlify](https://www.netlify.com/) has a really impressive and smooth deployment experience. I just connected my GitHub repository, setted some environment variables, and in less than 30 seconds my application was live.

Netlify's continuous deployment lets you live preview how different branches will work, and the atomic deploy support allows you to _rollback_ effortlessly. It's also really simple to set your domain and SSL. By clicking on one button you have HTTPS enabled on your site. Seriously, it's amazing.

I also use [Netlify CMS](https://www.netlifycms.org/) to write my posts. It's integrated with my GitHub repository and provides a simple interface for creating and editing the posts. It has an intuitive editorial workflow that organizes your posts into _drafts_, _in review_ and _ready_.

---

Thanks to all technologies I've used in this blog, specially Gatsby, I could get the best metrics and enabled PWA from the [Lighthouse](https://github.com/GoogleChrome/lighthouse) audit tool:

![Lighthouse audit](/lighthouse.jpg)

I'm really amazed with the results and how I could learn a lot from the development of this site. And like [Willian Justen](https://twitter.com/Willian_justen) always says:

> There's nothing better than using your own blog as a test subject for learning.
