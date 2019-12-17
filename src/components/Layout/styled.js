import styled from 'styled-components'
import theme from '../../styles/theme'
import mediaQuery from '../../styles/mediaQuery'

export const LayoutWrapper = styled.section`
  max-width: ${theme.large};
  margin: 0 auto;
  padding: 1.6rem 1.6rem 1.2rem 1.6rem;

  ${mediaQuery.lessThan('header')`
    padding: 0 1.6rem 1.2rem 1.6rem;
  `}
`

export const LayoutMain = styled.main`
  /* Sticky footer */
  min-height: calc(100vh - 37.8rem);
  padding: 2.4rem 0;

  ${mediaQuery.lessThan('header')`
    min-height: calc(100vh - 8.7rem);
  `}
`

export const LayoutFooter = styled.footer``
