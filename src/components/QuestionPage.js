import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/QuestionPage.css"
import DetailQuestion from "./DetailQuestion"
import ErrorPage from "./ErrorPage"

class QuestionPage extends Component {

  render() {
    const { question } = this.props
    console.log("QuestionPage", question, question === undefined)
    return (
      <div className="questionpage-container">
        {
          question !== undefined
          ?
          <DetailQuestion
            questionId={question.id}
          />
          :
          <ErrorPage />
        }
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
