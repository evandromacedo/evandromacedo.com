import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import coffeeCount from '../utils/coffeeCount'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />

      <S.PostWrapper>
        <S.PostHeader>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostDateAndReadTime>
            {post.frontmatter.date} • {coffeeCount(post.timeToRead)} {post.timeToRead} min
            read
          </S.PostDateAndReadTime>
          <S.PostTags>
            {post.frontmatter.tags.map((tag, i) => (
              <Fragment key={i}>
                <S.PostTag to={`/tags/${tag}`}>{tag}</S.PostTag>
                {i !== post.frontmatter.tags.length - 1 && ', '}
              </Fragment>
            ))}
          </S.PostTags>
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
        </S.PostHeader>
        <S.PostMainContent>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </S.PostMainContent>
      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        date(locale: "en-us", formatString: "MMMM DD, YYYY")
        description
        tags
        title
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
