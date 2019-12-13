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
          <S.MenuBlogLink to="/" onClick={closeMenu}>
            Blog
          </S.MenuBlogLink>
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

// const BlogLink = props => {
//   // const classObject = { className: 'blog active' }
//   const invalidPaths = ['/about/', '/projects/', '/search/']
//   const isActive = className => ({ location, isCurrent }) => {
//     // const classObject = { className: className + 'blog active' }
//     const activeClassObject = { className: className + ' active' }

//     if (isCurrent) return activeClassObject
//     if (!invalidPaths.includes(location.pathname)) return activeClassObject
//     return { className }
//   }

//   console.log()

//   return (
//     <Link getProps={isActive(props.className)} {...props}>
//       {props.children}
//     </Link>
//   )
// }

// const isActive = className => ({ location, isCurrent }) => {
//   // const classObject = { className: className + 'blog active' }
//   const activeClassObject = { className: className + ' active' }

//   if (isCurrent) return activeClassObject
//   if (!invalidPaths.includes(location.pathname)) return activeClassObject
//   return { className }
// }

// export const MenuBlogLink = ({ className, ...props }) => (
//   <Link getProps={isActive(props.className)} {...props}>
//     {props.children}
//   </Link>
// )

export default MenuLinks
