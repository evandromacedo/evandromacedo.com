import React from 'react'
import kebabCase from 'lodash/kebabCase'

import * as S from './styled'

const Tags = ({ tags }) => (
  <S.TagsWrapper>
    <S.TagsTitle>Tags</S.TagsTitle>
    <S.TagsList>
      {tags.map(tag => (
        <S.TagsItem key={tag.fieldValue}>
          <S.TagsLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            {tag.fieldValue}
          </S.TagsLink>
          <S.TagsCount> ({tag.totalCount})</S.TagsCount>
        </S.TagsItem>
      ))}
    </S.TagsList>
  </S.TagsWrapper>
)

export default Tags
