import { all, fork } from 'redux-saga/effects';
import * as watchForDataFetch from './githubSaga';

export default function* rootSaga() {
  yield all([...Object.values(watchForDataFetch)].map(fork));
}
