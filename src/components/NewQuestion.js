import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link, withRouter, Redirect } from 'react-router-dom'
import "../css/NewQuestion.css"

class NewQuestion extends Component {

  state = {
    optionOne: "",
    optionTwo: "",
  }

  handleQuestionSubmit = (evt) => {
    evt.preventDefault()
    console.log("Question submitted!")
  }

  handleChange = (evt) => {
    const text = evt.target.value;
    const name = evt.target.name;

    this.setState(() => ({
      [name]: text,
    }))

  }

  render() {
    const {optionOne, optionTwo} = this.state

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
            placeholder="Enter Option One Text Here"
            name="optionOne"
            value={optionOne}
            onChange={this.handleChange}
            />

          <div className="text-divider">
            <span>OR</span>
          </div>

          <input
            type="text"
            placeholder="Enter Option Two Text Here"
            name="optionTwo"
            value={optionTwo}
            onChange={this.handleChange}
            />

          <button onClick={this.handleQuestionSubmit}>
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
