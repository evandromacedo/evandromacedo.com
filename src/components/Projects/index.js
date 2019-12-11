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
        Some of the random open-source stuff I've made, since the designing until the
        deployment.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium error
          incidunt ut ullam pariatur, cumque reprehenderit rerum, fuga asperiores porro,
          sapiente harum molestias quasi vero. Eligendi odit quod corrupti hic.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          Main tech used: React, React DnD, Styled Components. Jest and Enzyme for tests.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium error
          incidunt ut ullam pariatur, cumque reprehenderit rerum, fuga asperiores porro,
          sapiente harum molestias quasi vero. Eligendi odit quod corrupti hic.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          Main tech used: React, React DnD, Styled Components. Jest and Enzyme for tests.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium error
          incidunt ut ullam pariatur, cumque reprehenderit rerum, fuga asperiores porro,
          sapiente harum molestias quasi vero. Eligendi odit quod corrupti hic.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          Main tech used: React, React DnD, Styled Components. Jest and Enzyme for tests.
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium error
          incidunt ut ullam pariatur, cumque reprehenderit rerum, fuga asperiores porro,
          sapiente harum molestias quasi vero. Eligendi odit quod corrupti hic.
        </S.GeneralParagraph>
        <S.GeneralParagraph>
          Main tech used: React, React DnD, Styled Components. Jest and Enzyme for tests.
        </S.GeneralParagraph>
      </ProjectItem>
    </S.GeneralWrapper>
  )
}

export default Projects
