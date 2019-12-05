import React, { useState } from 'react'

import info from './content'
import getPathname from '../../utils/getPathname'
import Me from '../Me'
import Masthead from '../Masthead'
import SocialLinks from '../SocialLinks'
import ThemeBulb from '../ThemeBulb'
import MenuLinks from '../MenuLinks'
import MenuIcon from './MenuIcon'
import CloseIcon from './CloseIcon'

import * as S from './styled'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)
  const closeMenu = () => setMenuIsOpen(false)
  const mastheadInfo = info[getPathname()] || info['/']

  return (
    <S.HeaderWrapper>
      <S.HeaderPresentation>
        <Me />
        <Masthead addInfo={mastheadInfo} />
        <S.HeaderLinks>
          <ThemeBulb />
          <SocialLinks />
        </S.HeaderLinks>

        {/* Mobile only - toggle MenuLinks */}
        <S.HeaderToggleMenu title="Open Menu" onClick={toggleMenu}>
          {!menuIsOpen && <MenuIcon />}
          {menuIsOpen && <CloseIcon />}
        </S.HeaderToggleMenu>
      </S.HeaderPresentation>

      <MenuLinks isOpen={menuIsOpen} closeMenu={closeMenu} />
    </S.HeaderWrapper>
  )
}

export default Header
