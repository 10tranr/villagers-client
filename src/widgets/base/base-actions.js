export const GET_USER = 'GET_USER';

export function getUser(data) {
  return {
    type: GET_USER,
    payload: data
  }
}