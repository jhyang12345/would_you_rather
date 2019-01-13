import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import "../css/NewQuestion.css"

class NewQuestion extends Component {
  render() {
    return (
      <div className="question-holder">
        <div className="question-header">
          Create New Question
        </div>
        <div className="question-hint">
          Complete the question:
        </div>
        <div className="question-title">
          Would you rather...
        </div>
        <div className="question-input-holder">
          <input
            type="text"
            placeholder="Enter Option One TextHere"
            />

          <div class="text-divider">
            <span>OR</span>
          </div>

          <input
            type="text"
            placeholder="Enter Option One TextHere"
            />

          <button>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
