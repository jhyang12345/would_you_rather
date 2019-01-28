import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
  render() {
    const { id } = this.props
    console.log(id)
    return (

    )
  }
}

function mapStateToProps({}, props) {

}

export default connect(mapStateToProps)(QuestionPage)
