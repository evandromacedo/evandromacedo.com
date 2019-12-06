import { generateMedia } from 'styled-media-query'
import theme from './theme'

const mediaQuery = generateMedia({
  large: theme.large,
  socialLinks: theme.socialLinks,
  header: theme.header,
  mastheadInfo: theme.mastheadInfo,
  paginationText: theme.paginationText,
  homePosts2Columns: theme.homePosts2Columns,
  homePosts1Column: theme.homePosts1Column,
})

export default mediaQuery
