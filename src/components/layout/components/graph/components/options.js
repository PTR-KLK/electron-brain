const options = graphActive => ({
  height: "100%",
  width: "100%",
  autoResize: true,
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
    color: "#ffffff",
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
    color: "#ffffff",
    font: {
      color: "#ffffff",
      background: "#000000",
      face: "monospace",
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
