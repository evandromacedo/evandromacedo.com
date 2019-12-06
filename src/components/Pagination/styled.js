import styled from 'styled-components'
import { Link } from 'gatsby'
import mediaQuery from '../../styles/mediaQuery'

export const PaginationWrapper = styled.section`
  display: grid;
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  justify-content: space-between;
  border-top: 2px solid var(--accent);
  padding-top: 0.8rem;
  color: var(--text);
  ${props => props.theme.Home_PostDescription}

  ${mediaQuery.lessThan('paginationText')`
    ${props => props.theme.Home_PostDateAndReadTime}
  `}
`

export const PaginationLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`
