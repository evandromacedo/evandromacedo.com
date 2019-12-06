import styled from 'styled-components'

export const PostListWrapper = styled.section`
  display: grid;
  grid-gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const PostListColumn = styled.div`
  display: grid;
  grid-gap: 3.2rem;
  align-content: start;
`
