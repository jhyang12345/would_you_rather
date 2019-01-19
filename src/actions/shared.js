import { getInitialData } from "../utils/api"
import { receiveQuestions } from "../actions/questions"
import { receiveUsers } from "../actions/users"
import { authorizeUser } from "../actions/authorizeUser"
import { showLoading, hideLoading } from 'react-redux-loading'

// Need to delete in final app!
const user = {
  id: 'sarahedo',
  name: 'Sarah Edo',
  avatarURL: '../../images/snow.jpg',
  answers: {
    "8xf0y6ziyjabvozdd253nd": 'optionOne',
    "6ni6ok3ym7mf1p33lnez": 'optionOne',
    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    "loxhs1bqm25b708cmbf3g": 'optionTwo'
  },
  questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(authorizeUser(user))
        dispatch(hideLoading())
      })
  }
}
