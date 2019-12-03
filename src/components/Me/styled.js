import styled from 'styled-components'

// This will be the TransitionLink soon
export const MeWrapper = styled.a`
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

  .me:hover .glasses {
    opacity: 1;
  }

  .me:hover .tongue {
    transform: translate(7px, 9px);
  }

  .me .fill {
    fill: var(--text);
    transition: all 0.4s;
  }

  .me .stroke {
    stroke: var(--text);
    transition: all 0.4s;
  }
`
