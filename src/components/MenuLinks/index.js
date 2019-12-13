import React from 'react'
import { Link } from 'gatsby'
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2'

import ThemeBulb from '../ThemeBulb'

import * as S from './styled'

const MenuLinks = ({ isOpen, closeMenu }) => {
  return (
    <S.MenuLinksWrapper isOpen={isOpen}>
      {/* Nav Links */}
      <S.MenuLinksList>
        <S.MenuLinksItem>
          <BlogLink to="/" onClick={closeMenu}>
            Blog
          </BlogLink>
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

const BlogLink = props => {
  const classObject = { className: 'blog active' }
  const invalidPaths = ['/about/', '/projects/', '/search/']

  return (
    <Link
      className="blog"
      getProps={({ location, isCurrent }) => {
        if (isCurrent) return classObject
        if (!invalidPaths.includes(location.pathname)) return classObject
        return null
      }}
      {...props}
    >
      {props.children}
    </Link>
  )
}

export default MenuLinks
