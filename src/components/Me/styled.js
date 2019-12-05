import styled from 'styled-components'
import mediaQuery from '../../styles/mediaQuery'
import { Link } from 'gatsby'

export const MeWrapper = styled(Link)`
  ${mediaQuery.lessThan('header')`
    display: none;
  `}

  .glasses,
  .tongue {
    transition: all 0.2s;
  }

  .glasses {
    opacity: 0;
  }

  .tongue {
    transform: translate(-10px, -30px);
  }

  @media (hover: hover) {
    &:hover .glasses {
      opacity: 1;
    }

    &:hover .tongue {
      transform: translate(7px, 9px);
    }
  }

  & .fill {
    fill: var(--text);
    transition: all 0.4s;
  }

  & .stroke {
    stroke: var(--text);
    transition: all 0.4s;
  }
`
