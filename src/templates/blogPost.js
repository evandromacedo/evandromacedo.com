import React, { Fragment } from 'react'
import { graphql } from 'gatsby'

import coffeeCount from '../utils/coffeeCount'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import RecommendedPosts from '../components/RecommendedPosts'

import * as S from '../components/Post/styled'

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const footer = (
    <RecommendedPosts next={pageContext.nextPost} previous={pageContext.previousPost} />
  )

  return (
    <Layout footer={footer}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />

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
        title
        date(locale: "en-us", formatString: "MMMM DD, YYYY")
        description
        tags
        image
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
