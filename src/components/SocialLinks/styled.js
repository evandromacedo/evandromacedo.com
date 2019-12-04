import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'

export const SocialLinksWrapper = styled.nav``

export const SocialLinksList = styled.ul`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
  grid-auto-columns: 3.2rem;
  align-items: center;
  list-style: none;

  ${mediaQuery.lessThan('socialLinks')`
    grid-auto-flow: row;
  `}
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--text);
  transition: color 0.3s;
  font-size: 2.4rem;

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`
