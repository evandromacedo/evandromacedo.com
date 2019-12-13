import styled from 'styled-components'
import mediaQuery from '../styles/mediaQuery'

export const BaseWrapper = styled.section`
  max-width: 99.2rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  ${mediaQuery.lessThan('header')`
    padding: 0;
  `}
`

export const BaseContent = styled.section`
  max-width: 97.6rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  ${mediaQuery.lessThan('header')`
    padding: 0;
  `}

  h1 {
    ${props => props.theme.General_TitleH1}
    margin-bottom: 1.6rem;
  }

  h2 {
    ${props => props.theme.General_TitleH2}
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }

  h2.description {
    ${props => props.theme.General_Description}
    margin-top: 0;
    margin-bottom: 4rem;
    font-size: 2rem;
    font-weight: normal;
  }

  h3 {
    ${props => props.theme.General_TitleH3}
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
  }

  p {
    ${props => props.theme.General_Paragraph}
    margin-bottom: 2.4rem;
  }

  a {
    ${props => props.theme.General_Link}
  }

  em {
    font-style: italic;
    font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2rem;
  }

  ul,
  ol {
    ${props => props.theme.General_Paragraph}
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto 2.4rem auto;
  }

  hr {
    border: 1px solid var(--divider);
    margin-top: 6.8rem;
    margin-bottom: 1.6rem;
  }

  strong {
    font-weight: bold;
  }
`
