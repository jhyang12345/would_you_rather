import { getUsers } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = "RECEIVE_USERS"

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function handleReceiveUsers() {
  return (dispatch) => {
    dispatch(showLoading())
    return getUsers()
      .then((users) => {
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}
