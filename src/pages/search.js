import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import styled from 'styled-components'

const Teste = styled.h1`
  ${props => props.theme.Header_AddInfo}
`

const SearchPage = ({ location }) => (
  <Layout pathname={location.pathname}>
    <SEO title="Home" />
    <Teste>Search page</Teste>
    <p>{location.pathname}</p>
  </Layout>
)

export default SearchPage
