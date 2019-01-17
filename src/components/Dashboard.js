import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    const { questions } = this.props
    console.log(questions)
    return (
      <div>Questions</div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard)
