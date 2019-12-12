import React from 'react'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'

import getPathname from '../../utils/getPathname'
import ThemeBulb from '../ThemeBulb'

import * as S from './styled'

const MenuLinks = ({ isOpen, closeMenu }) => {
  return (
    <S.MenuLinksWrapper isOpen={isOpen}>
      {/* Nav Links */}
      <S.MenuLinksList>
        <S.MenuLinksItem>
          <S.MenuLinksLink
            to={'/'}
            className={isBlogActive() ? 'active' : ''}
            onClick={closeMenu}
          >
            Blog
          </S.MenuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
          <S.MenuLinksLink to="/about/" activeClassName="active" onClick={closeMenu}>
            About
          </S.MenuLinksLink>
        </S.MenuLinksItem>
        <S.MenuLinksItem>
          <S.MenuLinksLink to="/projects/" activeClassName="active" onClick={closeMenu}>
            Projects
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      </S.MenuLinksList>

      {/* ThemeBulb (only mobile) and Search icons */}
      <S.MenuLinksRight>
        <ThemeBulb />
        <S.MenuLinksSearch
          to="/search/"
          activeClassName="active"
          onClick={closeMenu}
          title="Search"
        >
          <Search size="2.8rem" title="Search" />
        </S.MenuLinksSearch>
      </S.MenuLinksRight>
    </S.MenuLinksWrapper>
  )
}

const isBlogActive = () =>
  !['/about/', '/projects/', '/search/'].includes(getPathname()) ? true : false

export default MenuLinks
