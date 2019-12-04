import React from 'react'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'

import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      <S.MenuLinksItem>
        <S.MenuLinksLink className={isBlogActive() ? 'active' : ''} to={'/'}>
          Blog
        </S.MenuLinksLink>
      </S.MenuLinksItem>
      <S.MenuLinksItem>
        <S.MenuLinksLink to="/about" activeClassName="active">
          About
        </S.MenuLinksLink>
      </S.MenuLinksItem>
      <S.MenuLinksItem>
        <S.MenuLinksLink to="/projects" activeClassName="active">
          Projects
        </S.MenuLinksLink>
      </S.MenuLinksItem>
    </S.MenuLinksList>
    <S.MenuLinksSearch to="/search" title="Search" activeClassName="active">
      <Search size="3.2rem" title="Search" />
    </S.MenuLinksSearch>
  </S.MenuLinksWrapper>
)

const isBlogActive = () => {
  return !['/about', '/projects', '/search'].includes(window.location.pathname)
    ? true
    : false
}

export default MenuLinks
