import React from "react"
import { FaProjectDiagram } from "react-icons/fa"
import { connect } from "react-redux"

const GraphButton = ({ toggleGraph }) => {
  return (
    <button
      aria-label="Toggle graph"
      title="Toggle graph"
      onClick={toggleGraph}
    >
      <FaProjectDiagram />
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return { toggleGraph: () => dispatch({ type: `TOGGLE_GRAPH` }) }
}

export default connect(null, mapDispatchToProps)(GraphButton)
