import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'

export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1.6rem;

  ${mediaQuery.lessThan('header')`
    grid-template-columns: 1fr auto;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.4rem;

    .me {
      display: none;
    }

    .menu-links {
      display: none;
    }
  `}
`

export const HeaderHamburguerWrapper = styled.button`
  ${props => props.theme.ResetButtonStyles}
  color: var(--text);

  ${mediaQuery.greaterThan('header')`
    display: none;
  `}
`

export const HeaderLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;

  ${mediaQuery.lessThan('header')`
    display: none;
  `}
`
