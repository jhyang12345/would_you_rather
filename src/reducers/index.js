import { combineReducers } from 'redux'
import authorizeUser from "./authorizeUser"
import questions from "./questions"
import users from "./users"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authorizeUser,
  questions,
  users,
  loadingBar: loadingBarReducer,
})
