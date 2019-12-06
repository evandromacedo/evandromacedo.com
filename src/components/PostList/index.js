import React from 'react'
import PropTypes from 'prop-types'
import withSizes from 'react-sizes'

import theme from '../../styles/theme'
import PostItem from '../PostItem'

import * as S from './styled'

const PostList = ({ posts, columns }) => {
  const postGrid = Array.from({ length: columns }).map(() => [])

  posts.forEach((post, index) => {
    postGrid[index % columns].push({
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
  columns: PropTypes.number.isRequired,
}

const columnsCount = ({ width }) => {
  let columns = 3

  if (width <= parseInt(theme.homePosts2Columns)) {
    columns = 2
  }

  if (width <= parseInt(theme.homePosts1Column)) {
    columns = 1
  }

  return columns
}

const mapSizesToProps = sizes => ({
  columns: columnsCount(sizes),
})

export default withSizes(mapSizesToProps)(PostList)
