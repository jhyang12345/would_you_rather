import { combineReducers } from 'redux'
import authorizeUser from "./authorizeUser"
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authorizeUser,
  loadingBar: loadingBarReducer,
})
