import React from 'react'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'

import links from './content'

import * as S from './styled'

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {links.map((link, i) => (
        <S.MenuLinksItem key={i}>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
    <S.MenuLinksSearch to="/search" title="Search">
      <Search size="3.2rem" title="Search" />
    </S.MenuLinksSearch>
  </S.MenuLinksWrapper>
)

export default MenuLinks
