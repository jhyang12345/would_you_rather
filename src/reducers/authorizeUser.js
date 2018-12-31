import { AUTHORIZE_USER } from "../actions/authorizeUser"

export default function authorizeUser (state = null, action) {
  switch (action.type) {
    case AUTHORIZE_USER :
      return action.id
    default :
      return state
  }
}
