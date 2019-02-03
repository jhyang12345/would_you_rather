import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleSaveQuestionAnswer } from '../actions/questions.js'

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
      voted: this.props.voted
    }))

    console.log(this.state)

    if (this.state.voted) this.checkAnsweredOption()

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
    }))

    // Redirect to home
    // this.props.history.push("/")
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

export default withRouter(connect(mapStateToProps)(DetailQuestion))
