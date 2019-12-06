import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'

import PostItem from '../PostItem'

import * as S from './styled'

const PostList = ({ posts, rows }) => {
  const postGrid = Array.from({ length: rows }).map(() => [])

  posts.forEach((post, index) => {
    postGrid[index % rows].push({
      title: post.node.frontmatter.title,
      description: post.node.frontmatter.description,
      date: post.node.frontmatter.date,
      timeToRead: post.node.timeToRead,
      tags: post.node.frontmatter.tags,
      slug: post.node.fields.slug,
    })
  })

  return (
    <S.PostListWrapper>
      {postGrid.map((postColumn, i) => (
        <S.PostListColumn key={i}>
          {postColumn.map((postItem, i) => (
            <PostItem
              key={i}
              title={postItem.title}
              description={postItem.description}
              date={postItem.date}
              timeToRead={postItem.timeToRead}
              tags={postItem.tags}
              slug={postItem.slug}
            />
          ))}
        </S.PostListColumn>
      ))}
    </S.PostListWrapper>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  rows: PropTypes.number.isRequired,
}

const mapSizesToProps = ({ width }) => {
  let rows = 3

  if (width < 1000) {
    rows = 2
  }

  if (width < 800) {
    rows = 1
  }

  return { rows }
}

export default withSizes(mapSizesToProps)(PostList)
