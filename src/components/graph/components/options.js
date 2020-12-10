const options = graphActive => ({
  layout: {
    improvedLayout: true,
    randomSeed: 1,
  },
  edges: {
    color: "#000000",
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
    color: "#000000",
    font: {
      background: "#ffffff",
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
  height: "300px",
  autoResize: true,
})

export default options
