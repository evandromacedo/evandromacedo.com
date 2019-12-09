import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const RecommendedPosts = ({ next, previous }) => {
  if (!next && !previous) {
    return null
  }

  return (
    <S.RecommendedPostsWrapper hasNext={next} hasPrevious={previous}>
      {previous && (
        <S.RecommendedPostsLink to={previous.fields.slug} className="previous">
          {previous.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
      {next && (
        <S.RecommendedPostsLink to={next.fields.slug} className="next">
          {next.frontmatter.title}
        </S.RecommendedPostsLink>
      )}
    </S.RecommendedPostsWrapper>
  )
}

RecommendedPosts.propTypes = {
  next: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
  previous: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
  }),
}

export default RecommendedPosts
