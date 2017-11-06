import { takeLatest, put, call } from 'redux-saga/effects';
import {
        GET_INSTRUMENT_DATA
       } from './base-actions.js';

export function* getInstrumentData(action) {
  try {

  } catch (e) {

  }
}

// A single entry point to start all the sagas at once. Using a generator function.
export default function* BaseSaga() {
  yield takeLatest(GET_INSTRUMENT_DATA, getInstrumentData);
}