import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Projects from '../components/Projects'

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" description="Some random stuff I've built." />

    <Projects />
  </Layout>
)

export default ProjectsPage
