import styled from 'styled-components'
import { Link } from 'gatsby'
import mediaQuery from '../../styles/mediaQuery'

export const TagPostsWrapper = styled.section`
  margin-bottom: 3.2rem;
  display: grid;
  grid-gap: 0.8rem;
  justify-items: start;

  ${mediaQuery.lessThan('header')`
    grid-gap: 0;
  `}
`

export const TagPostsTitle = styled.h1`
  ${props => props.theme.General_TitleH1}

  ${mediaQuery.lessThan('header')`
    ${props => props.theme.General_TitleH2}
  `}
`

export const TagPostsLink = styled(Link)`
  ${props => props.theme.General_Link}

  &:before {
    content: '\\2190  ';
  }
`
