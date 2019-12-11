import styled from 'styled-components'
import mediaQuery from '../styles/mediaQuery'

export const GeneralWrapper = styled.section`
  max-width: 97.6rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  ${mediaQuery.lessThan('header')`
    padding: 0;
  `}
`

export const GeneralH1 = styled.h1`
  ${props => props.theme.General_TitleH1}
  margin-bottom: 1.6rem;
`

export const GeneralH2 = styled.h2`
  ${props => props.theme.General_TitleH2}
  margin-top: 4rem;
  margin-bottom: 2.4rem;
`

export const GeneralH3 = styled.h3`
  ${props => props.theme.General_TitleH3}
  margin-top: 3.2rem;
  margin-bottom: 2.4rem;
`

export const GeneralDescription = styled.p`
  ${props => props.theme.General_Description}
  margin-bottom: 4rem;
`

export const GeneralParagraph = styled.p`
  ${props => props.theme.General_Paragraph}
  margin-bottom: 2.4rem;
`

export const GeneralLink = styled.a`
  ${props => props.theme.General_Link}
`

export const GeneralEmphasis = styled.em`
  font-style: italic;
  font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 2rem;
`
