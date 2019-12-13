import styled, { css } from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'
import { ThemeBulbWrapper } from '../ThemeBulb/styled'
import { Link } from 'gatsby'
import CustomBlogLink from './CustomBlogLink'

export const MenuLinksWrapper = styled.nav`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;
  position: relative;
  border-top: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);

  ${mediaQuery.lessThan('header')`
    border-top: none;
    justify-content: start;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 0;
    background-color: var(--background);
    transition: transform 0.3s, background 0.4s;
    transform: translateY(-7.5rem);

    ${props => props.isOpen && `transform: translateY(4.6rem);`}
  `}
`

export const MenuLinksRight = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;

  ${mediaQuery.greaterThan('header')`
    ${ThemeBulbWrapper} {
      display: none;
    }
  `}
`

export const MenuLinksSearch = styled(Link)`
  color: var(--text);
  transition: color 0.3s;

  &.active {
    color: var(--accent);
  }

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`

export const MenuLinksList = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1.6rem;

  ${mediaQuery.lessThan('header')`
    grid-auto-flow: row;
  `}
`

const baseLinkStyles = css`
  ${props => props.theme.Header_MenuLink}
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;

  &.active {
    text-decoration: underline var(--accent);
  }

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`

export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
  ${baseLinkStyles}
`

export const MenuBlogLink = styled(CustomBlogLink)`
  ${baseLinkStyles}
`
