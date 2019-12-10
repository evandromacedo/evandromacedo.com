import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostItemTitle = styled.h1`
  ${props => props.theme.Home_PostTitle}
  margin-bottom: 0.8rem;
  color: var(--text);
  transition: color 0.3s;
`

export const PostItemLink = styled(Link)`
  display: block;
  width: 100%;
  color: var(--text);
  text-decoration: none;
  transition: color 0.3s;

  @media (hover: hover) {
    &:hover ${PostItemTitle} {
      color: var(--accent);
    }
  }
`

export const PostItemWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const PostItemDateAndReadTime = styled.small`
  ${props => props.theme.Home_PostDateAndReadTime}
  display: block;
  margin-bottom: 1.2rem;
`

export const PostItemDescription = styled.p`
  ${props => props.theme.Home_PostDescription}
  margin-bottom: 0.4rem;
`

export const PostItemTags = styled.small`
  ${props => props.theme.General_Tag}
`

export const PostItemTag = styled(Link)`
  color: var(--text);
  transition: color 0.3s;
  text-decoration: underline;

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`
