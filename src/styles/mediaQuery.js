import { generateMedia } from 'styled-media-query'
import theme from './theme'

const mediaQuery = generateMedia({
  large: theme.large,
  medium: theme.medium,
  small: theme.small,
  header: theme.header,
  socialLinks: theme.socialLinks,
  mastheadInfo: theme.mastheadInfo,
  paginationText: theme.paginationText,
  homePosts2Columns: theme.homePosts2Columns,
  homePosts1Column: theme.homePosts1Column,
})

export default mediaQuery
