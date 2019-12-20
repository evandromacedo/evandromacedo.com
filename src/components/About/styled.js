import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'

export const ColumnWrapper = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: 1fr 2px 1fr;
  justify-items: center;

  ${mediaQuery.lessThan('medium')`
    grid-template-columns: 1fr;
    justify-items: start;
    padding-top: 0.8rem;
  `}
`

export const ColumnDivider = styled.div`
  width: 100%;
  background-color: var(--divider);

  ${mediaQuery.lessThan('medium')`
    display: none;
  `}
`

export const ColumnTitle = styled.h3``

export const Column = styled.div`
  ${ColumnTitle} {
    margin-top: 0;
    text-align: center;

    ${mediaQuery.lessThan('medium')`
      text-align: start;
    `}
  }

  ul {
    margin-bottom: 0;
  }
`

export const Footer = styled.nav`
  ${props => props.theme.General_Paragraph}
  text-align: center;
  text-transform: lowercase;
  margin-bottom: 0;
  border-top: 2px solid var(--accent);
  padding-top: 0.8rem;

  a {
    ${props => props.theme.General_Link}
  }
`
