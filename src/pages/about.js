import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

const Teste = styled.h1`
  ${props => props.theme.Header_AddInfo}
`

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <Teste>About page</Teste>
  </Layout>
)

export default AboutPage
