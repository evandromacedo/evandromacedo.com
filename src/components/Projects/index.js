import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectItem from './ProjectItem'

import * as S from '../../styles/generalStyles'

const Projects = () => {
  const {
    reactSimpleSnackbarImage,
    tftSynergiesImage,
    hipHopLegendImage,
    evandroMacedoImage,
  } = useStaticQuery(graphql`
    query {
      reactSimpleSnackbarImage: file(
        relativePath: { eq: "projects/react-simple-snackbar.png" }
      ) {
        childImageSharp {
          fluid(maxHeight: 60, maxWidth: 452) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tftSynergiesImage: file(relativePath: { eq: "projects/tft-synergies.png" }) {
        childImageSharp {
          fluid(maxHeight: 220, maxWidth: 232) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hipHopLegendImage: file(relativePath: { eq: "projects/hip-hop-legend.png" }) {
        childImageSharp {
          fluid(maxHeight: 238, maxWidth: 384) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      evandroMacedoImage: file(relativePath: { eq: "projects/me.png" }) {
        childImageSharp {
          fluid(maxHeight: 296, maxWidth: 296) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.GeneralWrapper>
      <S.GeneralH1>Projects</S.GeneralH1>
      <S.GeneralDescription>
        <S.GeneralEmphasis>
          Some of the random open-source stuff I've made, since the designing 'til the
          deployment.
        </S.GeneralEmphasis>
      </S.GeneralDescription>

      <ProjectItem
        title="React Simple Snackbar"
        imgSharp={reactSimpleSnackbarImage.childImageSharp.fluid}
        imgWidth={452}
        links={[
          {
            label: 'Docs and Demo',
            href: 'https://evandromacedo.com/react-simple-snackbar',
          },
          {
            label: 'GitHub Repository',
            href: 'https://github.com/evandromacedo/react-simple-snackbar',
          },
        ]}
      >
        <S.GeneralParagraph>
          A React component that shows a Snackbar to provide brief messages on your
          application. It appears temporarily and doesn't interrupt the user experience.
          It's based on{' '}
          <S.GeneralLink target="blank" href="https://material.io/components/snackbars/">
            Material Design Snackbars
          </S.GeneralLink>
          , but it's made to be simpler and doesn't perform custom actions. Particularly I
          made this component to use in my own projects because none of the existing React
          components published on NPM provided a simple solution like I wanted.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          <S.GeneralEmphasis>
            Tech used: React, React Transition Group; Rollup for bundle; Jest and Enzyme
            for tests.
          </S.GeneralEmphasis>
        </S.GeneralParagraph>
      </ProjectItem>

      <ProjectItem
        title="TFT Synergies"
        imgSharp={tftSynergiesImage.childImageSharp.fluid}
        imgWidth={232}
        links={[
          {
            label: 'Live Version',
            href: 'https://tftsynergies.netlify.com/',
          },
          {
            label: 'GitHub Repository',
            href: 'https://github.com/evandromacedo/tft-synergies',
          },
        ]}
      >
        <S.GeneralParagraph>
          A League of Legend's Teamfight Tactics team builder. This little tool allows you
          to select champions and items to check the synergies results based on the
          combinations you've made. Unfortunately the game has launched a new set of
          champions and items recentelly, turning the patch of this app obsolete. However,
          I made this for fun and to learn some tech I hadn't put in practice before, so
          it was worth it anyway.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          <S.GeneralEmphasis>
            Tech used: React, React DnD, Styled Components; Jest and Enzyme for tests.
          </S.GeneralEmphasis>
        </S.GeneralParagraph>
      </ProjectItem>

      <ProjectItem
        title="evandromacedo.com"
        imgSharp={evandroMacedoImage.childImageSharp.fluid}
        imgWidth={296}
        links={[
          {
            label: 'GitHub Repository',
            href: 'https://github.com/evandromacedo/evandromacedo.com',
          },
        ]}
      >
        <S.GeneralParagraph>
          Yeah, this site is open-source too. Firstly I made this focusing on share some
          of my thoughts, but building this site provided me an opportunity to learn lots
          of things and realize, in practice, how Gatsby is incredibly amazing! Working
          with React and GraphQL is awesome, and the Gatsby's pluggable ecosystem turns
          everything so easy. You can read more{' '}
          <S.GeneralLink href="#">here</S.GeneralLink> to check an in depth process of
          building this blog.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          <S.GeneralEmphasis>
            Tech used: Gatsby, React, GraphQL, Styled Components; NetlifyCMS for content
            management; Algolia for searches.
          </S.GeneralEmphasis>
        </S.GeneralParagraph>
      </ProjectItem>

      <ProjectItem
        title="Hip-hop Legend"
        imgSharp={hipHopLegendImage.childImageSharp.fluid}
        imgWidth={384}
        links={[
          {
            label: 'Live Version',
            href: 'https://evandromacedo.com/hip-hop-legend/',
          },
          {
            label: 'GitHub Repository',
            href: 'https://github.com/evandromacedo/hip-hop-legend',
          },
        ]}
      >
        <S.GeneralParagraph>
          A little app to play Hip-hop beats together with sound loops. This is an ooold
          side-project I built to study Vanilla JS DOM manipulation and HTML5 Audio API.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          <S.GeneralEmphasis>Tech used: HTML, CSS and JavaScript.</S.GeneralEmphasis>
        </S.GeneralParagraph>
      </ProjectItem>
    </S.GeneralWrapper>
  )
}

export default Projects
