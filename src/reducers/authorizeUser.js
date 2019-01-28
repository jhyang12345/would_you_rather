import { AUTHORIZE_USER, UNAUTHORIZE_USER } from "../actions/authorizeUser"

export default function authorizeUser (state = null, action) {
  switch (action.type) {
    case AUTHORIZE_USER :
      return {
        ...state,
        ...action.id,
      }
    case UNAUTHORIZE_USER :
      return null
    default :
      return state
  }
}
