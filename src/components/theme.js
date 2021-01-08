import { keyframes } from "styled-components"
import { rgba } from "polished"

const boxContainer = theme => `
  border: 1px solid ${theme.text};
  border-radius: 0.25rem;
  background: ${theme.primary};
  ${shadow(theme)};
`

const shadow = theme => `
  box-shadow: 2px 2px 0px 0px ${rgba(theme.secondary, 0.8)};
`

export const sectionContainer = theme => `
  display: flex;
  width: calc(100% - 2px - 2rem);
  ${boxContainer(theme)};
`

export const linkContainer = theme => `
  ${boxContainer(theme)};
`

export const hover = theme => keyframes`
  from {
    ${shadow(theme)};
  }

  to {
    box-shadow: none;
    transform: translate(2px, 2px);
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
