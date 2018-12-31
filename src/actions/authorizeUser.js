export const AUTHORIZE_USER = 'AUTHORIZE_USER'

export function authorizeUser(id) {
  return {
    type: AUTHORIZE_USER,
    id,
  }
}
