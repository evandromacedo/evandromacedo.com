import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const PostItem = ({ title, description, date, timeToRead, tags, slug }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDateAndReadTime>
        {date} • ☕️ {timeToRead} min read
      </S.PostItemDateAndReadTime>
      <S.PostItemDescription>{description}</S.PostItemDescription>
      <S.PostItemTags>
        {tags.map((tag, i) => (
          <Fragment key={i}>
            <S.PostItemTag>{tag}</S.PostItemTag>
            {i !== tags.length - 1 && ', '}
          </Fragment>
        ))}
      </S.PostItemTags>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  slug: PropTypes.string.isRequired,
}

export default PostItem
