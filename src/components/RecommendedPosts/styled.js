import styled from 'styled-components'
import { Link } from 'gatsby'
import mediaQuery from '../../styles/mediaQuery'

export const RecommendedPostsWrapper = styled.nav`
  display: grid;
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  justify-content: space-between;
  border-top: 2px solid var(--accent);
  padding-top: 0.8rem;
  color: var(--text);

  ${props => props.theme.Home_PostDescription}

  ${props =>
    !props.hasPrevious &&
    `
    &:before {
      content: ''
    }
  `}

  ${props =>
    !props.hasNext &&
    `
    &:after {
      content: ''
    }
  `}

  ${mediaQuery.lessThan('small')`
    grid-auto-flow: row;
    justify-content: center;
    justify-items: center;

    &:after,
    &:before {
      content: none;
    }
  `}
`

export const RecommendedPostsLink = styled(Link)`
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;

  &.previous:before {
    content: '\\2190';
    margin-right: 0.8rem;
  }

  &.next:after {
    content: '\\2192';
    margin-left: 0.8rem;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`
