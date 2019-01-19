import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import "../css/Dashboard.css"

class Dashboard extends Component {
  render() {
    const { questions } = this.props
    const questionList = []
    for (let key in questions) {
      questionList.push(questions[key])
    }

    questionList.sort((a, b) =>
      (b.timestamp - a.timestamp)
    )

    console.log(questionList)
    return (
      <div className="dashboard-container">
          {
            questionList.map((question) => (
              <li key={question.id}>
                <Question question={question}/>
              </li>
            ))
          }
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questions,
  }
}

export default connect(mapStateToProps)(Dashboard)
