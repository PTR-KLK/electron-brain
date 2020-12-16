const options = graphActive => ({
  height: "100%",
  width: "100%",
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
    shape: "diamond",
    size: 8,
    color: "#ffffff",
    font: {
      color: "#ffffff",
      background: "#133C55",
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
