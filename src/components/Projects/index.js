import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProjectItem from './ProjectItem'
import projects from './content'

import { BaseContent } from '../../styles/base'

const Projects = () => {
  const {
    reactSimpleSnackbar,
    tftSynergies,
    evandroMacedo,
    hipHopLegend,
  } = useStaticQuery(imagesQuery)

  reactSimpleSnackbar.details = projects.reactSimpleSnackbar
  tftSynergies.details = projects.tftSynergies
  evandroMacedo.details = projects.evandroMacedo
  hipHopLegend.details = projects.hipHopLegend

  const allProjects = [reactSimpleSnackbar, tftSynergies, evandroMacedo, hipHopLegend]

  return (
    <BaseContent>
      <h1>Projects</h1>
      <h2 className="description">
        Some of the random open-source stuff I've made, since the designing 'til the
        deployment.
      </h2>

      {allProjects.map((project, i) => (
        <ProjectItem
          key={i}
          title={project.details.title}
          imgSharp={project.childImageSharp.fluid}
          imgWidth={project.details.imgWidth}
          links={project.details.links}
        >
          {project.details.content}
        </ProjectItem>
      ))}
    </BaseContent>
  )
}

const imagesQuery = graphql`
  query {
    reactSimpleSnackbar: file(
      relativePath: { eq: "projects/react-simple-snackbar.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 452) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tftSynergies: file(relativePath: { eq: "projects/tft-synergies.png" }) {
      childImageSharp {
        fluid(maxWidth: 232) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    hipHopLegend: file(relativePath: { eq: "projects/hip-hop-legend.png" }) {
      childImageSharp {
        fluid(maxWidth: 384) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    evandroMacedo: file(relativePath: { eq: "projects/me.png" }) {
      childImageSharp {
        fluid(maxWidth: 296) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Projects
