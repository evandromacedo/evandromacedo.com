import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

const Teste = styled.h1`
  ${props => props.theme.Header_AddInfo}
`

const ProjectsPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Teste>Projects page</Teste>
    <p>{location.pathname}</p>
  </Layout>
)

export default ProjectsPage
