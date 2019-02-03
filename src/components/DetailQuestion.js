import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/questions.js'

import "../css/DetailQuestion.css"

import avatar from '../images/avatar.png'

class DetailQuestion extends Component {

  state = {
    selected: null,
    fixed: false,
    voted: false,
  }

  componentDidMount() {
    this.setState(() => ({
      ...this.state,
      voted: this.hasVoted()
    }))

    if (this.state.voted === true) this.checkAnsweredOption()

  }

  hasVoted = () => {
    const { question, authorizeUser } = this.props
    const id = authorizeUser.id

    return question.optionOne.votes.includes(id)
      || question.optionTwo.votes.includes(id)
  }

  handleButtonClick = (evt) => {
    evt.preventDefault()
    const key = this.state.selected
    const { dispatch, question, authorizeUser } = this.props

    dispatch(handleSaveQuestionAnswer({
      authedUser: authorizeUser.id,
      qid: question.id,
      answer: key,
    }))

    this.setState(() => ({
      voted: true,
      fixed: true,
    }))

    // Redirect to home
    // this.props.history.push("/")
  }

  getFixedOption = () => {
    const { question, authorizeUser } = this.props
    const id = authorizeUser.id
    if (question.optionOne.votes.includes(id)) {
      return true
    } else if(question.optionTwo.votes.includes(id)) {
      return true
    }
    return false
  }

  getCheckedAnswer = () => {
    const { question, authorizeUser } = this.props
    const id = authorizeUser.id
    if (question.optionOne.votes.includes(id)) {
      return "optionOne"
    } else if(question.optionTwo.votes.includes(id)) {
      return "optionTwo"
    }
  }

  checkAnsweredOption = () => {
    const { question, authorizeUser } = this.props

    const id = authorizeUser.id


    console.log("question", id)
  }

  toggleOption = (value) => {
    if (this.state.fixed) return
    this.setState(() => ({
      selected: value,
    }))
    console.log(this.state, value)
  }

  render() {
    const { question } = this.props

    const { voted } = this.state

    console.log("Detail", this.state)

    const { author, id, optionOne, optionTwo, timestamp } = question

    return (
      <div className="question-container">
        <div className="author-header">Asked by {author}</div>
        <div className="author-profile-holder">
          <img src={avatar} />
        </div>
        <div className="options-holder">
          {
            false
            ? (<form className="options-form">
              <div className="radio-container">
                <input
                  onChange={this.toggleOption.bind(this, "optionOne")}
                  name={"radio_" + id}
                  type="radio"
                  value="optionOne"
                  disabled={this.getFixedOption()}
                  checked={this.state.selected === "optionOne"}
                  />
                <label
                htmlFor="optionOne"
                onClick={this.toggleOption.bind(this, "optionOne")}
                >{optionOne.text}</label>
              </div>
              <div className="radio-container">
                <input
                  onChange={this.toggleOption.bind(this, "optionTwo")}
                  name={"radio_" + id}
                  type="radio"
                  value="optionTwo"
                  disabled={this.getFixedOption()}
                  checked={this.state.selected === "optionTwo"}
                  />
                <label
                htmlFor="optionTwo"
                onClick={this.toggleOption.bind(this, "optionTwo")}
                >{optionTwo.text}</label>
              </div>
              <div>
                <button
                  onClick={this.handleButtonClick}
                  disabled={
                    this.state.selected === null ||
                    this.getFixedOption()
                  }
                  >Submit</button>
              </div>
            </form>)
            : (<div className="options-fixed">
                <div className="fixed-option-container">
                  <div className="fixed-option-label">
                    Would you rather {optionOne.text}
                  </div>
                </div>
                <div className="fixed-option-container">
                  <div className="fixed-option-label">
                    Would you rather {optionTwo.text}
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authorizeUser, questions }, props) {
  const { questionId } = props

  return {
    authorizeUser,
    question: questions[questionId],
  }
}

export default withRouter(connect(mapStateToProps)(DetailQuestion))
