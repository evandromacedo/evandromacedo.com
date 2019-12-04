import React from 'react'

import getPathname from '../../utils/getPathname'
import Me from '../Me'
import Masthead from '../Masthead'
import SocialLinks from '../SocialLinks'
import ThemeBulb from '../ThemeBulb'
import MenuLinks from '../MenuLinks'
import info from './content'

import * as S from './styled'

const Header = () => {
  const mastheadInfo = info[getPathname()] || info['/']

  return (
    <S.HeaderWrapper>
      <Me />
      <Masthead addInfo={mastheadInfo} />
      <S.HeaderLinks>
        <ThemeBulb />
        <SocialLinks />
      </S.HeaderLinks>
      <MenuLinks />
    </S.HeaderWrapper>
  )
}

export default Header
