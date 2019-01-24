import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/Question.css"

import avatar from '../images/avatar.png'

class Question extends Component {

  state = {
    selected: null,
  }

  handleButtonClick = (evt) => {
    evt.preventDefault()
    console.log("Submitted!")
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
    this.setState(() => ({
      selected: value,
    }))
  }

  render() {
    const { question } = this.props
    // author is id of author not the name
    const { author, id, optionOne, optionTwo, timestamp } = question

    console.log(optionOne);
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
                  this.state.selected === null
                }
                >Submit</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

export default connect()(Question)
