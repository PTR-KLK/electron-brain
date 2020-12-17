import colors from "../../colors"

const options = graphActive => ({
  height: "100%",
  width: "100%",
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
    width: 2,
    color: colors.secondary,
    chosen: false,
    arrows: {
      to: false,
      from: false,
    },
  },
  nodes: {
    fixed: true,
    shape: "square",
    size: 8,
    color: {
      border: colors.tertiary,
      background: colors.tertiary,
      highlight: {
        border: colors.accent,
        background: colors.accent,
      },
      hover: {
        border: colors.accent,
        background: colors.accent,
      },
    },
    font: {
      color: colors.light,
      background: colors.primary,
      face: "Inconsolata",
      size: 16,
    },
  },
  physics: {
    enabled: false,
  },
  interaction: {
    dragView: graphActive,
    zoomView: graphActive,
    hover: true,
  },
})

export default options
