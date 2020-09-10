import { put, takeLatest, call, delay } from 'redux-saga/effects';
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import { dataFetchSuccess, dataFetchFailure } from '../action/githubAction';

function* handleUserFetchSaga(action) {
  try {
    const response = yield call(
      axios.get,
      `https://api.github.com/users/${action.userName}`
    );
    console.log('response', response);
    yield delay(500);
    if (response.status === 200) {
      yield put(dataFetchSuccess(response.data));
    } else if (response.status === 404) {
      yield put(dataFetchFailure());
    } else {
      return 'Something Went Wrong. Please Retry';
    }
  } catch (error) {
    yield put(dataFetchFailure());
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchForDataFetch() {
  yield takeLatest('HANDLER_CLICKED', handleUserFetchSaga);
}
