import { keyframes } from "styled-components"

const boxContainer = theme => `
  border: 1px solid ${theme.text};
  background: ${theme.primary};
`

const linkShadow = theme => `
  box-shadow: 2px 2px 0px 0px ${theme.secondary};
`

export const sectionContainer = theme => `
  display: flex;
  ${boxContainer(theme)};
`

export const linkContainer = theme => `
  ${linkShadow(theme)};
  ${boxContainer(theme)};
`

export const hover = theme => keyframes`
  from {
    ${linkShadow(theme)};
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
