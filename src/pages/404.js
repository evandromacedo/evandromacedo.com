import React from 'react'
import styled, { keyframes } from 'styled-components'

import SEO from '../components/SEO'
import Me from '../components/Me'
import { MeWrapper } from '../components/Me/styled'

import GlobalStyles from '../styles/global'
import mediaQuery from '../styles/mediaQuery'

const Container = styled.section`
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

const Title = styled.h1`
  color: var(--accent);
  font-weight: bold;
  font-size: 10.4rem;
`

const Text = styled.p`
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

const RotateMe = styled.div`
  transform: rotate(0deg);
  animation: ${rotateAnimation} 5s infinite;

  ${mediaQuery.lessThan('header')`
    ${MeWrapper} {
      display: block;
    }
  `}
`

const NotFoundPage = () => (
  <Container>
    <SEO title="404: Not found" />
    <GlobalStyles />
    <RotateMe>
      <Me />
    </RotateMe>
    <Title>404</Title>
    <Text>Nothing to do here.</Text>
  </Container>
)

export default NotFoundPage
