import React from "react"
import { FaUserAlt } from "react-icons/fa"
import { connect } from "react-redux"

const AuthorButton = ({ toggleAuthor }) => {
  return (
    <button
      aria-label="Toggle author info"
      title="Toggle author info"
      onClick={toggleAuthor}
    >
      <FaUserAlt />
    </button>
  )
}

const mapDispatchToProps = dispatch => {
  return { toggleAuthor: () => dispatch({ type: `TOGGLE_AUTHOR` }) }
}

export default connect(null, mapDispatchToProps)(AuthorButton)
