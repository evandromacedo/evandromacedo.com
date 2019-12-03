import styled from 'styled-components'

export const MastheadWrapper = styled.section`
  text-align: left;
`

export const MastheadHeading = styled.h1`
  ${props => props.theme.Header_SiteTitle1}
`

export const MastheadSubheading = styled.h2`
  ${props => props.theme.Header_SiteTitle2}
`

export const MastheadLowerText = styled.div`
  display: flex;
  align-items: flex-end;
`

export const MastheadAddInfo = styled.h3`
  ${props => props.theme.Header_AddInfo}
  color: var(--accent);
`
