const options = (graphActive, theme) => ({
  height: "100%",
  width: "100%",
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
    width: 2,
    color: theme.secondary,
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
      border: theme.text,
      background: theme.text,
      highlight: {
        border: theme.accent,
        background: theme.accent,
      },
      hover: {
        border: theme.accent,
        background: theme.accent,
      },
    },
    font: {
      color: theme.text,
      background: theme.primary,
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
