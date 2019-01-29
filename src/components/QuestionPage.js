import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render() {
    const { id } = this.props
    console.log(id)
    return (
      <div></div>
    )
  }
}

function mapStateToProps({}, props) {
  const { id } = props.match.params
  return {
    id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
