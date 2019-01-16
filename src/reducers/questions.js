import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions"

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
        questions: {
          // ...questions,
          [action.question.id]: action.question
        },
        // questions : action.question
      }
    default :
      return state
  }
}
