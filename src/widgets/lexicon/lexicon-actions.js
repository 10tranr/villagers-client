export const GET_LEXICON_DATA = 'GET_LEXICON_DATA';

export function getLexiconData(data) {
  return {
    type: GET_LEXICON_DATA,
    payload: data
  }
}