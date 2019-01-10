import { combineReducers } from 'redux'
import authorizeUser from "./authorizeUser"
import questions from "./questions"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authorizeUser,
  questions,
  loadingBar: loadingBarReducer,
})
