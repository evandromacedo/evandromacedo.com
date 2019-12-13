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

export const Column = styled.div`
  h3 {
    margin-top: 0;
    margin-bottom: 2.4rem;
    text-align: center;

    ${mediaQuery.lessThan('medium')`
      text-align: start;
    `}
  }

  ul {
    margin-bottom: 0;
  }
`
