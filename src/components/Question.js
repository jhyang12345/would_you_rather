import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import "../css/Question.css"

class Question extends Component {

  render() {
    const { question } = this.props
    const { author, id, optionOne, optionTwo, timestamp } = question

    return (
      <Fragment>
        <div className="author-header">{author}</div>
        <div className="author-profile-holder"></div>
        <div className="question-holder">
          <form className="options-form">
            <input type="radio" className="optionOne" value={optionOne}/>
            <input type="radio" className="optionTwo" value={optionTwo}/>
          </form>

        </div>
      </Fragment>
    )
  }
}

export default connect()(Question)
