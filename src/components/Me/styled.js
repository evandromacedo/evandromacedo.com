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

  .meSvg:hover .glasses {
    opacity: 1;
  }

  .meSvg:hover .tongue {
    transform: translate(7px, 9px);
  }

  .meSvg .fill {
    fill: var(--text);
    transition: all 0.4s;
  }

  .meSvg .stroke {
    stroke: var(--text);
    transition: all 0.4s;
  }
`
