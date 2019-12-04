import React from 'react'

import Me from '../Me'
import Masthead from '../Masthead'
import SocialLinks from '../SocialLinks'
import ThemeBulb from '../ThemeBulb'
import MenuLinks from '../MenuLinks'

import * as S from './styled'

const Header = () => (
  <S.HeaderWrapper>
    <Me />
    <Masthead />
    <S.HeaderLinks>
      <ThemeBulb />
      <SocialLinks />
    </S.HeaderLinks>
    <MenuLinks />
  </S.HeaderWrapper>
)

export default Header
