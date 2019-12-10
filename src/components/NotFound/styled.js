import styled, { keyframes } from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'
import { MeWrapper } from '../Me/styled'

export const NotFoundWrapper = styled.section`
  min-height: 450px;
  height: 100vh;
  width: 100vw;
  padding: 2.4rem;
  display: grid;
  grid-gap: 1.6rem;
  align-content: center;
  justify-items: center;
  justify-content: center;
  color: var(--text);
  font-family: sans-serif;
  text-align: center;
`

export const NotFoundTitle = styled.h1`
  color: var(--accent);
  font-weight: bold;
  font-size: 10.4rem;
`

export const NotFoundText = styled.p`
  font-size: 3.2rem;

  ${mediaQuery.lessThan('small')`
    font-size: 2.4rem;
  `}
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(45deg);
  }

  50% {
    transform: rotate(-30deg);
  }

  100% {
    transform: rotate(45deg);
  }
`

export const NotFoundRotate = styled.div`
  transform: rotate(0deg);
  animation: ${rotateAnimation} 5s infinite;

  ${mediaQuery.lessThan('header')`
    ${MeWrapper} {
      display: block;
    }
  `}
`
