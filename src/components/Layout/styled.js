import styled from 'styled-components'
import theme from '../../styles/theme'
import GaramondRegular from '../../../static/font/Garamond-Regular.ttf'
import GaramondItalic from '../../../static/font/Garamond-Italic.ttf'
import GaramondBold from '../../../static/font/Garamond-Bold.ttf'
import GaramondBoldItalic from '../../../static/font/Garamond-BoldItalic.ttf'
import mediaQuery from '../../styles/mediaQuery'

export const LayoutWrapper = styled.section`
  min-height: 100vh;
  max-width: ${theme.large};
  margin: 0 auto;
  padding: 1.6rem 1.6rem 1.2rem 1.6rem;

  ${mediaQuery.lessThan('header')`
    padding: 0.8rem 1.6rem 1.2rem 1.6rem;
  `}

  /* Font-faces */
  @font-face {
    font-family: 'Garamond';
    src: url(${GaramondRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Garamond';
    src: url(${GaramondItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Garamond';
    src: url(${GaramondBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Garamond';
    src: url(${GaramondBoldItalic}) format('truetype');
    font-weight: bold;
    font-style: italic;
  }
`

export const LayoutMain = styled.main``
