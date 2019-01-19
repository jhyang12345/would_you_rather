import React, { Component } from 'react'
import { connect } from 'react-redux'
import "../css/Question.css"

class Question extends Component {

  render() {
    const { question } = this.props
    // author is id of author not the name
    const { author, id, optionOne, optionTwo, timestamp } = question
    console.log(optionOne);
    return (
      <div className="question-container">
        <div className="author-header">Asked by {author}</div>
        <div className="author-profile-holder"></div>
        <div className="options-holder">
          <form className="options-form">
            <div>
              <input type="radio" value="optionOne"/>
              <label for="optionOne">{optionOne.text}</label>
            </div>
            <div>
              <input type="radio" value="optionTwo"/>
              <label for="optionTwo">{optionTwo.text}</label>
            </div>
            <div>
              <button>Submit</button>
            </div>

          </form>

        </div>
      </div>
    )
  }
}

export default connect()(Question)