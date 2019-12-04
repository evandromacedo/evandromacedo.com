import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
  display: grid;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 0;
  position: relative;
  border-top: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
`

export const MenuLinksSearch = styled(Link)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
`

export const MenuLinksItem = styled.li``

export const MenuLinksLink = styled(Link)`
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
