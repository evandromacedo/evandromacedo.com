import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const BlogPost = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO title="Home" />

    <h1>{post.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </Layout>
)

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost
