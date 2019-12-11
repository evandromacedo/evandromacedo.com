import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Tags from '../components/Tags'

const TagsPage = ({ data }) => {
  const { tags } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Tags" description="All tags and count of posts for each one" />

      <Tags tags={tags} />
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      tags: group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
