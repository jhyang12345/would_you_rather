import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/Question.css"
import { handleSaveQuestionAnswer } from '../actions/questions.js'

import avatar from '../images/avatar.png'

class Question extends Component {

  state = {
    selected: null,
    fixed: false,
  }

  componentDidMount() {
    const { voted } = this.props
    if (voted) this.checkAnsweredOption()
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
  }

  checkAnsweredOption = () => {
    const { question, authorizeUser } = this.props

    const id = authorizeUser.id
    if (question.optionOne.votes.includes(id)) {
      this.setState(() => ({
        selected: "optionOne",
        fixed: true,
      }))
    } else if(question.optionTwo.votes.includes(id)) {
      this.setState(() => ({
        selected: "optionTwo",
        fixed: true,
      }))
    }
  }

  handleOptionChange = (evt) => {
    const name = evt.target.name
    const value = evt.target.value
    const checked = evt.target.checked

    this.setState(() => ({
      selected: value,
    }))
  }

  toggleOption = (value) => {
    console.log(this.state)
    if (this.state.fixed) return
    this.setState(() => ({
      selected: value,
    }))
  }

  render() {
    const { question, voted } = this.props
    // author is id of author not the name
    const { author, id, optionOne, optionTwo, timestamp } = question

    return (
      <div className="question-container">
        <div className="author-header">Asked by {author}</div>
        <div className="author-profile-holder">
          <img src={avatar} />
        </div>
        <div className="options-holder">
          <form className="options-form">
            <div className="radio-container">
              <input
                onChange={this.toggleOption.bind(this, "optionOne")}
                name={"radio_" + id}
                type="radio"
                value="optionOne"
                disabled={this.state.fixed}
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
                disabled={this.state.fixed}
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
                  this.state.fixed
                }
                >Submit</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

function mapStateToProps({ authorizeUser }) {
  return {
    authorizeUser,
  }
}

export default connect(mapStateToProps)(Question)
