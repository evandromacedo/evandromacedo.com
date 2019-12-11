import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'
import { Link } from 'gatsby'

export const PostWrapper = styled.article`
  max-width: 97.6rem;
  padding: 0 1.6rem;
  margin: 0 auto;

  ${mediaQuery.lessThan('header')`
    padding: 0;
  `}
`

export const PostHeader = styled.header``

export const PostTitle = styled.h1`
  ${props => props.theme.General_TitleH1}
  margin-bottom: 1.6rem;
`

export const PostDateAndReadTime = styled.p`
  ${props => props.theme.Home_PostDateAndReadTime}
  margin-bottom: 1.2rem;
`

export const PostTags = styled.p`
  ${props => props.theme.General_Tag}
  margin-bottom: 4rem;
`

export const PostTag = styled(Link)`
  color: var(--text);
  transition: color 0.3s;
  text-decoration: underline;

  @media (hover: hover) {
    &:hover {
      color: var(--accent);
    }
  }
`

export const PostDescription = styled.p`
  ${props => props.theme.General_Description}
  margin-bottom: 1.2rem;
`

export const PostMainContent = styled.section`
  h1 {
    ${props => props.theme.General_TitleH1}
    margin-top: 4rem;
    margin-bottom: 2.4rem;
  }

  h2 {
    ${props => props.theme.General_TitleH2}
    margin-top: 4rem;
    margin-bottom: 2.4rem;
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

  ul,
  ol {
    ${props => props.theme.General_Paragraph}
    padding-left: 2.4rem;
    margin-bottom: 2.4rem;

    p {
      margin: 0;
    }
  }

  ul {
    list-style: disc;
  }

  ol {
    list-style: decimal;
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }

  hr {
    border: 1px solid var(--divider);
    margin-top: 6.8rem;
    margin-bottom: 1.6rem;
  }

  blockquote {
    border-left: 0.3rem solid var(--accent);
    padding: 0.8rem 2.4rem;
    margin: 3.2rem auto;

    p {
      font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
      font-size: 2.1rem;
      font-style: italic;
      margin: 0;
      opacity: 0.6;
    }
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
    font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2rem;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  a {
    color: var(--accent);

    &:hover {
      opacity: 0.6;
    }
  }

  /* PrismJS */
  code.language-text {
    color: inherit;
    padding: 0.2em 0.4em;
    font-size: 75%;
    border-radius: 3px;

    body.light & {
      background-color: #e0e0e0;
    }

    body.dark & {
      background-color: #3c4250;
    }
  }

  pre {
    margin: 0;
    padding: 1.4rem 1.6rem;
    font-size: 1.6rem;
    border-radius: 4px;

    body.dark & {
      border: 2px solid #3c4250;
    }
  }

  pre.language-text > code.language-text {
    font-size: 1.6rem;
    background-color: transparent;
  }

  .gatsby-highlight {
    margin-bottom: 2.4rem;
  }

  .gatsby-highlight .line-numbers {
    padding-left: 4.8rem;
  }

  .gatsby-highlight .line-numbers-rows {
    padding-top: 1.6rem;
    padding-left: 1.6rem;
    border-right: none;
  }
`
