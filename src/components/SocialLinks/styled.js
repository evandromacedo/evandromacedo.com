import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav``

export const SocialLinksList = styled.ul`
  display: grid;
  grid-gap: 0.8rem;
  grid-auto-flow: column;
  grid-auto-columns: 3.2rem;
  align-items: center;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--text);
  transition: color 0.3s;
  font-size: 2.4rem;

  &:hover {
    color: var(--accent);
  }
`
