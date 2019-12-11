import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TagPosts from '../components/TagPosts'

const TagPostsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { posts, totalCount } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title={`Tag: ${tag}`} description={`Posts tagged with ${tag}`} />

      <TagPosts tag={tag} totalCount={totalCount} posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      posts: edges {
        node {
          frontmatter {
            title
            date(locale: "en-us", formatString: "MMMM DD, YYYY")
            description
            tags
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

export default TagPostsTemplate
