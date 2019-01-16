import { saveQuestion } from '../utils/api.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question) {
  console.log("Question Action!")
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    dispatch(showLoading)

    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}
