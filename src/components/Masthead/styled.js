import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'
import { Link } from 'gatsby'

export const MastheadWrapper = styled.section`
  text-align: left;
`

export const MastheadHeading = styled.h1`
  ${props => props.theme.Header_SiteTitle1}

  ${mediaQuery.lessThan('header')`
    display: none;
  `}
`

export const MastheadLowerText = styled.div`
  display: flex;
  align-items: flex-end;

  ${mediaQuery.lessThan('header')`
    display: none;
  `}
`

export const MastheadSubheading = styled.h2`
  ${props => props.theme.Header_SiteTitle2}
`

export const MastheadAddInfo = styled.h3`
  ${props => props.theme.Header_AddInfo}
  color: var(--accent);
`

export const MastheadMobile = styled(Link)`
  display: none;
  font-size: 3.2rem;
  text-transform: lowercase;
  text-decoration: none;
  color: var(--text);

  .addInfo {
    font-size: 1.6rem;
    color: var(--accent);
  }

  ${mediaQuery.lessThan('header')`
    display: inline;
  `}

  ${mediaQuery.lessThan('mastheadInfo')`
    .addInfo {
      display: none;
    }
  `}
`
