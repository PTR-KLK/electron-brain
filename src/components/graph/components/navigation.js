import { navigate } from "gatsby"

const navigation = data => event => {
  if (event.event.type === "tap" && event.nodes[0]) {
    const link = data.nodes.find(el => el.id === event.nodes[0]).link
    return link && navigate(link)
  }
}

export default navigation
