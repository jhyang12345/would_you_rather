import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import "../css/QuestionPage.css"
import DetailQuestion from "./DetailQuestion"

class QuestionPage extends Component {

  hasVoted = (question) => {
    const { authorizeUser } = this.props
    const id = authorizeUser.id

    return question.optionOne.votes.includes(id)
      || question.optionTwo.votes.includes(id)
  }

  render() {
    const { id, question } = this.props

    return (
      <div className="questionpage-container">
        <DetailQuestion
          question={question}
          voted={this.hasVoted(question)}
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
