import { takeLatest, put, call } from 'redux-saga/effects';
import {
        GET_LEXICON_DATA
       } from './base-actions.js';

export function* getLexiconData(action) {
  try {

  } catch (e) {

  }
}

// A single entry point to start all the sagas at once. Using a generator function.
export default function* LexiconSaga() {
  yield takeLatest(GET_LEXICON_DATA, getLexiconData);
}