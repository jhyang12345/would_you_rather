export const AUTHORIZE_USER = 'AUTHORIZE_USER'
export const UNAUTHORIZE_USER = 'UNAUTHORIZE_USER'

export function authorizeUser(id) {
  return {
    type: AUTHORIZE_USER,
    id,
  }
}

export function unauthorizeUser() {
  return {
    type: UNAUTHORIZE_USER,
  }
}
