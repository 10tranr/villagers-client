import { takeLatest, put, call } from 'redux-saga/effects';
import {
        GET_USER
       } from './base-actions.js';

export function* getUser(action) {
  try {

  } catch (e) {

  }
}

// A single entry point to start all the sagas at once. Using a generator function.
export default function* BaseSaga() {
  yield takeLatest(GET_USER, getUser);
}