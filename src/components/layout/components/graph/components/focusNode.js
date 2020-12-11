const findCurrentNodes = (arr, pathname) => {
  const node = arr.find(el => el.fields.slug === pathname)
  const mapReferences = arr => arr.map(el => el.id)

  return node
    ? [
        node.id,
        ...mapReferences(node.outboundReferences),
        ...mapReferences(node.inboundReferences),
      ]
    : []
}

const focusNode = (network, nodes) => {
  const currNodes = findCurrentNodes(nodes, window.location.pathname)
  network.fit({
    nodes: currNodes,
  })
  if (currNodes.length > 0) {
    network.selectNodes([currNodes[0]])
  }
}

export default focusNode
