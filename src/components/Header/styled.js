import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'

export const HeaderWrapper = styled.header`
  ${mediaQuery.lessThan('header')`
    position: relative;
    height: 3.8rem;
  `}
`

export const HeaderPresentation = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1.6rem;
  margin-bottom: 1.4rem;

  ${mediaQuery.lessThan('header')`
    grid-template-columns: 1fr auto;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    border-bottom: 2px solid var(--accent);
    margin-bottom: 0;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;
    background-color: var(--background);
    transition: background 0.4s;
  `}
`

export const HeaderToggleMenu = styled.button`
  ${props => props.theme.ResetButtonStyles}
  outline: none;
  color: var(--text);
  transition: color 0.4s;

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
