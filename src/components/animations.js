import colors from "./colors"
import shadow from "./shadow"
import { keyframes } from "styled-components"

export const hover = keyframes`
  from {
    box-shadow: ${shadow};
  }

  to {
    box-shadow: 0.25rem 0.25rem 0px 0px ${colors.accent};
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
