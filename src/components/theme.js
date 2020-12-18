import { keyframes } from "styled-components"

export const shadow = secondary => `0.25rem 0.25rem 0px 0px ${secondary};`

export const hover = (secondary, accent) => keyframes`
  from {
    ${shadow(secondary)};
  }

  to {
    box-shadow: 0.15rem 0.15rem 0px 0px ${accent};
  }
`

export const reveal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
