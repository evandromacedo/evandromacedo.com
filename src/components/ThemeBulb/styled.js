import styled from 'styled-components'

export const ThemeBulbWrapper = styled.button`
  ${props => props.theme.ResetButtonStyles}
  outline: none;
  display: grid;
  align-items: center;
  justify-items: center;
  color: var(--accent);
`
