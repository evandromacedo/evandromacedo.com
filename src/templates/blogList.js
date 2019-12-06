import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostList from '../components/PostList'

// const BlogList = ({ data, pageContext }) => {
const BlogList = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  // const { currentPage, numPages } = pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prevPage = currentPage - 1 === 1 ? '/' : `page/${currentPage - 1}`
  // const nextPage = `page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ paddingTop: '50px' }}>
        <PostList posts={posts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(locale: "en-us", formatString: "MMMM DD, YYYY")
            description
            tags
            title
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
