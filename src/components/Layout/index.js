import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import * as S from './styled'
import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'
import Header from '../Header'

const Layout = ({ children, footer }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <S.LayoutMain>{children}</S.LayoutMain>
        {footer && <S.LayoutFooter>{footer}</S.LayoutFooter>}
      </ThemeProvider>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
}

export default Layout
