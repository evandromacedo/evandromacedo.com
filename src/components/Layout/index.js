import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'
import GlobalStyles from '../../styles/global'
import theme from '../../styles/theme'

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
