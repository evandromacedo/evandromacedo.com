const theme = {
  // Typography

  // Header
  Header_SiteTitle1: `
    font-size: 16rem;
    line-height: 14.4rem;
    text-transform: lowercase;
  `,
  Header_SiteTitle2: `
    font-size: 10.8rem;
    text-transform: lowercase;
  `,
  Header_AddInfo: `
    font-size: 3.2rem;
    line-height: 5.6rem;
    text-transform: lowercase;
  `,
  Header_MenuLink: `
    font-family: Garamond, Georgia, Cambria, Cochin, Times, 'Times New Roman', serif;
    font-size: 2.1rem;
    font-weight: bold;
    text-transform: uppercase;
  `,

  // Home
  Home_PostTitle: `
    font-size: 3.2rem;
    font-weight: bold;
  `,
  Home_PostDescription: `
    font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2rem;
    line-height: 2.6rem;
  `,
  Home_PostDateAndReadTime: `
    font-size: 1.6rem;
  `,

  // General
  General_TitleH1: `
    font-size: 4.8rem;
    font-weight: bold;
  `,
  General_TitleH2: `
    font-size: 3.2rem;
    font-weight: bold;
  `,
  General_TitleH3: `
    font-size: 2.4rem;
    font-weight: bold;
  `,
  General_Description: `
    font-family: Georgia, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-style: italic;
    font-weight: normal;
  `,
  General_Paragraph: `
    font-size: 2rem;
    line-height: 3.2rem;
  `,
  General_Tag: `
    font-size: 1.6rem;
    font-style: italic;
  `,
  General_Link: `
    color: var(--accent);

    @media (hover: hover) {
      &:hover {
        opacity: 0.7;
      }
    }
  `,

  // Reset Button Styles
  ResetButtonStyles: `
    cursor: pointer;
    border: none;
    border-radius: 0;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    text-align: inherit;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
  `,

  // Breakpoints
  large: '1170px',
  medium: '768px',
  small: '480px',
  header: '848px',
  socialLinks: '960px',
  mastheadInfo: '416px',
  paginationText: '360px',
  homePosts2Columns: '848px',
  homePosts1Column: '600px',
}

export default theme
