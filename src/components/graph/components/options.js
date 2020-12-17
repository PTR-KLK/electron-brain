import colors from "../../colors"

const options = graphActive => ({
  height: "100%",
  width: "100%",
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
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
    size: 6,
    color: colors.tertiary,
    font: {
      color: colors.light,
      background: colors.primary,
      face: "Inconsolata",
    },
  },
  physics: {
    enabled: false,
  },
  interaction: {
    dragView: graphActive,
    zoomView: graphActive,
  },
})

export default options
