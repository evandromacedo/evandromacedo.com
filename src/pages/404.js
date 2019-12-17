import React from 'react'
import * as S from '../components/NotFound/styled'
import SEO from '../components/SEO'
import Me from '../components/Me'
import GlobalStyles from '../styles/global'

const NotFoundPage = () => (
  <S.NotFoundWrapper>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <S.NotFoundRotate>
      <Me />
    </S.NotFoundRotate>
    <S.NotFoundTitle>404</S.NotFoundTitle>
    <S.NotFoundText>Nothing to do here.</S.NotFoundText>
  </S.NotFoundWrapper>
)

export default NotFoundPage
