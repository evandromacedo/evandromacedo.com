import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

const Teste = styled.h1`
  ${props => props.theme.Header_SiteTitle1}
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Teste>evandro</Teste>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
