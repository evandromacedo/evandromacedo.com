import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Search from '../components/Search'

const SearchPage = () => (
  <Layout>
    <SEO title="Search" description="Search posts by title, description or tags" />
    <Search />
  </Layout>
)

export default SearchPage
