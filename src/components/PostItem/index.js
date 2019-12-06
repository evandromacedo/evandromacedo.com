import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import coffeeCount from '../../utils/coffeeCount'

import * as S from './styled'

const PostItem = ({ title, description, date, timeToRead, tags, slug }) => (
  <S.PostItemWrapper>
    <S.PostItemLink to={slug}>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemDateAndReadTime>
        {date} • {coffeeCount(timeToRead)} {timeToRead} min read
      </S.PostItemDateAndReadTime>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemLink>

    <S.PostItemTags>
      {tags.map((tag, i) => (
        <Fragment key={i}>
          <S.PostItemTag to={`/tags/${tag}`}>{tag}</S.PostItemTag>
          {i !== tags.length - 1 && ', '}
        </Fragment>
      ))}
    </S.PostItemTags>
  </S.PostItemWrapper>
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
