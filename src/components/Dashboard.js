import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import "../css/Dashboard.css"

class Dashboard extends Component {
  state = {
    // if answered is set to true render questions that have been answered
    answered: false,
  }

  hasVoted = (question) => {
    const { authorizeUser } = this.props
    const id = authorizeUser.id

    return question.optionOne.votes.includes(id)
      || question.optionTwo.votes.includes(id)
  }

  switchAnswered = () => {
    this.setState(() => ({
      answered: !this.state.answered,
    }))
  }

  render() {
    const { questions } = this.props
    const { answered } = this.state
    const questionList = []
    for (let key in questions) {
      const question = questions[key]
      const voted = this.hasVoted(question)
      if (this.state.answered) {
        if (voted) {
          questionList.push(question)
        }
      } else {
        if (!voted) {
          questionList.push(question)
        }
      }
    }

    questionList.sort((a, b) =>
      (b.timestamp - a.timestamp)
    )

    console.log(questionList)
    return (
      <Fragment>
        <span
          className="answered-switch"
          onClick={this.switchAnswered}
          >
          {answered
          ? "Answered"
          : "Not Answered"}
        </span>
        <div className="dashboard-container">
            {
              questionList.map((question) => (
                <li key={question.id}>
                  <Question question={question}/>
                </li>
              ))
            }
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps({ questions, authorizeUser }) {
  return {
    questions,
    authorizeUser,
  }
}

export default connect(mapStateToProps)(Dashboard)
