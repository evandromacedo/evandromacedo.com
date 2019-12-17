import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'
import PostList from '../PostList'

const TagPosts = ({ tag, totalCount, posts }) => {
  return (
    <>
      <S.TagPostsWrapper>
        <S.TagPostsLink to="/tags">See all tags</S.TagPostsLink>
        <S.TagPostsTitle>
          {totalCount} post{totalCount === 1 ? '' : 's'} tagged with "{tag}":
        </S.TagPostsTitle>
      </S.TagPostsWrapper>
      <PostList posts={posts} />
    </>
  )
}

TagPosts.propTypes = {
  tag: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
}

export default TagPosts
