import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import "../css/QuestionPage.css"
import DetailQuestion from "./DetailQuestion"

class QuestionPage extends Component {

  render() {
    const { id, question } = this.props

    return (
      <div className="questionpage-container">
        <DetailQuestion
          questionId={question.id}
          />
      </div>
    )
  }
}

function mapStateToProps({ questions, authorizeUser }, props) {
  const { id } = props.match.params
  return {
    id,
    question: questions[id],
    authorizeUser,
  }
}

export default connect(mapStateToProps)(QuestionPage)
