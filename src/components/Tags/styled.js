import styled from 'styled-components'
import { Link } from 'gatsby'

export const TagsWrapper = styled.section``

export const TagsTitle = styled.h1`
  ${props => props.theme.General_TitleH1}
  margin-bottom: 3.2rem;
`

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const TagsItem = styled.li`
  margin: 0 2.4rem 2.4rem 0;
`

export const TagsLink = styled(Link)`
  ${props => props.theme.General_Link}
  font-size: 2rem;
`

export const TagsCount = styled.small`
  ${props => props.theme.Home_PostDateAndReadTime}
`
