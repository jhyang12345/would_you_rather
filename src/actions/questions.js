import { saveQuestion, saveQuestionAnswer } from '../utils/api.js'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

function addQuestion(question) {
  console.log("Question Action!")
  return {
    type: ADD_QUESTION,
    question,
  }
}

function addQuestionAnswer(answer) {
  console.log("Answer Action!", answer)
  return {
    type: SAVE_QUESTION_ANSWER,
    answer,
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
    dispatch(showLoading())

    return saveQuestion(question)
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function handleSaveQuestionAnswer(answer) {
  return (dispatch, getState) => {
    dispatch(showLoading)

    return saveQuestionAnswer(answer)
      .then(() => dispatch(addQuestionAnswer(answer)))
      .then(() => dispatch(hideLoading()))
  }
}
