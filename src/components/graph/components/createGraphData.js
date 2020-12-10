const createGraphData = arr => {
  const nodes = []
  const edges = []

  arr.forEach(el =>
    el.outboundReferences.forEach(elem =>
      edges.push({
        from: el.id,
        to: elem.id,
      })
    )
  )

  arr.forEach(el =>
    nodes.push({
      id: el.id,
      label: el.frontmatter.title,
      link: el.fields.slug,
    })
  )

  return { nodes: nodes, edges: edges }
}

export default createGraphData
