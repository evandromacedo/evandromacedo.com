import { generateMedia } from 'styled-media-query'
import theme from './theme'

const mediaQuery = generateMedia({
  large: theme.large,
  socialLinks: theme.socialLinks,
  header: theme.header,
  mastheadInfo: theme.mastheadInfo,
})

export default mediaQuery