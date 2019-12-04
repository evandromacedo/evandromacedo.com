import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import * as S from './styled'
import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'

import Header from '../Header'

const Layout = ({ children, pathname }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header pathname={pathname} />
        <S.LayoutMain>{children}</S.LayoutMain>
      </ThemeProvider>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
