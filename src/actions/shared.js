import { getInitialData } from "../utils/api"
import { receiveQuestions } from "../actions/questions"
import { authorizeUser } from "../actions/authorizeUser"

export function handleInitialData() {
  return (dispatch) => {

    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveQuestions(questions))
      })
  }
}
