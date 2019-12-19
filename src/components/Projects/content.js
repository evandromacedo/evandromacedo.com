import React from 'react'
import { Link } from 'gatsby'

const content = {
  reactSimpleSnackbar: {
    title: 'React Simple Snackbar',
    imgWidth: 452,
    links: [
      {
        label: 'Docs and Demo',
        href: 'https://evandromacedo.github.io/react-simple-snackbar',
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/evandromacedo/react-simple-snackbar',
      },
    ],
    content: (
      <>
        <p>
          A React component that shows a Snackbar to provide brief messages on your
          application. It appears temporarily and doesn't interrupt the user experience.
          It's based on{' '}
          <a target="blank" href="https://material.io/components/snackbars/">
            Material Design Snackbars
          </a>
          , but it's made to be simpler and doesn't perform custom actions. Particularly I
          made this component to use in my own projects because none of the existing React
          components published on NPM provided a simple solution like I wanted.
        </p>
        <p>
          <em>
            Tech used: React, React Transition Group; Rollup for bundle; Jest and Enzyme
            for tests.
          </em>
        </p>
      </>
    ),
  },
  tftSynergies: {
    title: 'TFT Synergies',
    imgWidth: 232,
    links: [
      {
        label: 'Live Version',
        href: 'https://tftsynergies.netlify.com/',
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/evandromacedo/tft-synergies',
      },
    ],
    content: (
      <>
        <p>
          A League of Legend's Teamfight Tactics team builder. This little tool allows you
          to select champions and items to check the synergies results based on the
          combinations you've made. Unfortunately the game has launched a new set of
          champions and items recentelly, turning the patch of this app obsolete. However,
          I made this for fun and to learn some tech I hadn't put in practice before, so
          it was worth it anyway.
        </p>
        <p>
          <em>
            Tech used: React, React DnD, Styled Components; Jest and Enzyme for tests.
          </em>
        </p>
      </>
    ),
  },
  evandroMacedo: {
    title: 'evandromacedo.com',
    imgWidth: 296,
    links: [
      {
        label: 'GitHub Repository',
        href: 'https://github.com/evandromacedo/evandromacedo.com',
      },
    ],
    content: (
      <>
        <p>
          Yeah, this site is open-source too. Firstly I made this focusing on share some
          of my thoughts, but building this site provided me an opportunity to learn lots
          of things and realize, in practice, how Gatsby is incredibly amazing! Working
          with React and GraphQL is awesome, and the Gatsby's pluggable ecosystem turns
          everything so easy. You can read more <Link to="">here</Link> to check an in
          depth process of building this blog.
        </p>
        <p>
          <em>
            Tech used: Gatsby, React, GraphQL, Styled Components; NetlifyCMS for content
            management; Algolia for searches.
          </em>
        </p>
      </>
    ),
  },
  hipHopLegend: {
    title: 'Hip-hop Legend',
    imgWidth: 384,
    links: [
      {
        label: 'Live Version',
        href: 'https://evandromacedo.github.io/hip-hop-legend/',
      },
      {
        label: 'GitHub Repository',
        href: 'https://github.com/evandromacedo/hip-hop-legend',
      },
    ],
    content: (
      <>
        <p>
          A little app to play Hip-hop beats together with sound loops. This is an ooold
          side-project I built to study Vanilla JS DOM manipulation and HTML5 Audio API.
        </p>
        <p>
          <em>Tech used: HTML, CSS and JavaScript.</em>
        </p>
      </>
    ),
  },
}

export default content
