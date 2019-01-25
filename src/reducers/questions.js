import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions"

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      console.log(action)
      return {
        ...state,
        [action.question.id]: action.question
        // questions : action.question
      }
    case SAVE_QUESTION_ANSWER:
      console.log("SAVE QUESTION ANSWER")
      return {
        ...state,
      }
    default :
      return state
  }
}
