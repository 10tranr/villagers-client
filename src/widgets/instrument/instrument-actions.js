export const GET_INSTRUMENT_DATA = 'GET_INSTRUMENT_DATA';

export function getInstrument(data) {
  return {
    type: GET_INSTRUMENT_DATA,
    payload: data
  }
}