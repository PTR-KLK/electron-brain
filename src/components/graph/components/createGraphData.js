const pushNodes = (arr, nodeArr) => {
  arr.forEach(el => {
    if (!nodeArr.some(ele => ele.id === el.id)) {
      nodeArr.push({
        id: el.id,
        label: el.frontmatter.title,
        link: el.fields.slug,
      })
    }
  })
}

const pushEdges = (arr, obj, edgesArr) => {
  arr.forEach(elem =>
    edgesArr.push({
      from: obj.id,
      to: elem.id,
    })
  )
}

const createGraphData = arr => {
  const nodes = []
  const edges = []

  arr.forEach(el => {
    pushEdges(el.outboundReferences, el, edges)
    pushEdges(el.inboundReferences, el, edges)
  })

  if (arr.length === 1) {
    const referencesArr = [
      arr[0],
      ...arr[0].outboundReferences,
      ...arr[0].inboundReferences,
    ]

    pushNodes(referencesArr, nodes)
  } else {
    pushNodes(arr, nodes)
  }

  return { nodes: nodes, edges: edges }
}

export default createGraphData
