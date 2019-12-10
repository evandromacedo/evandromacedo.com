import styled from 'styled-components'

export const SearchWrapper = styled.section`
  .ais-SearchBox,
  .ais-Stats {
    max-width: 97.6rem;
    padding: 0 1.6rem;
    margin: 0 auto;
  }

  .ais-Stats {
    margin-top: 0.8rem;
    margin-bottom: 2.4rem;
  }

  .ais-Stats-text {
    font-size: 1.6rem;
    font-style: italic;
  }

  .ais-SearchBox-input {
    font-family: inherit;
    font-size: 2.8rem;
    color: var(--text);
    border: none;
    border-bottom: 2px solid var(--divider);
    display: flex;
    width: 100%;
    transition: color 0.4s, border-color 0.4s;
    background: none;
    padding: 0 0.8rem;
    outline: none;

    &:focus {
      border-bottom-color: var(--accent);
    }

    &::placeholder {
      transition: color 0.4s;
      color: var(--divider);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }

  .ais-Hits-list {
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`

export const SearchNoResults = styled.div`
  max-width: 96rem;
  margin: 1.6rem auto 2.4rem auto;
  text-align: center;

  p {
    ${props => props.theme.General_Paragraph}
  }
`
