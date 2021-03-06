import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import "../css/NewQuestion.css"
import { handleAddQuestion } from '../actions/questions.js'

class NewQuestion extends Component {

  state = {
    optionOne: "",
    optionTwo: "",
    toHome: false,
  }

  handleQuestionSubmit = (evt) => {
    evt.preventDefault()

    const { authorizeUser, dispatch } = this.props
    const { optionOne, optionTwo } = this.state
    console.log("Question submitted!")
    console.log(authorizeUser);
    dispatch(handleAddQuestion({
      author: authorizeUser.id,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }))

    this.setState(() => ({
      toHome: true,
    }))
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

    if (this.state.toHome) return <Redirect to='/' />

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

function mapStateToProps({authorizeUser}) {
  return {
    authorizeUser,
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
