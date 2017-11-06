export const GET_MODCAT_DATA = 'GET_MODCAT_DATA';

export function getModcatData(data) {
  return {
    type: GET_MODCAT_DATA,
    payload: data
  }
}