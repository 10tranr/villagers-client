import { takeLatest, put, call } from 'redux-saga/effects';
import {
        GET_MODCAT_DATA
       } from './modcat-actions.js';

export function* getModcatData(action) {
  try {

  } catch (e) {

  }
}

// A single entry point to start all the sagas at once. Using a generator function.
export default function* ModcatSaga() {
  yield takeLatest(GET_MODCAT_DATA, getModcatData);
}