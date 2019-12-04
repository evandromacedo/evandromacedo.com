import styled from 'styled-components'
import { Link } from 'gatsby'

// This will be the TransitionLink soon
export const MeWrapper = styled(Link)`
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
