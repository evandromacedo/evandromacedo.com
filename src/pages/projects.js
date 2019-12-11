import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

const Teste = styled.h1`
  ${props => props.theme.Header_AddInfo}
`

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" description="Some random stuff I've built" />
    <Teste>Projects page</Teste>
  </Layout>
)

export default ProjectsPage
