import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About'

const AboutPage = () => (
  <Layout>
    <SEO
      title="About"
      description="Know a little more about Evandro Macedo and this blog."
    />

    <About />
  </Layout>
)

export default AboutPage
