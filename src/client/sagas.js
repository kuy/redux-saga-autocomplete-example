import * as saga from 'redux-saga';
import {
  REQUEST_SUGGESTS
} from './actions';

const { take, call, put } = saga;

export function* fetchSuggests() {
  yield call();
  yield put();
}

export default function* rootSaga() {
  yield* take(REQUEST_SUGGESTS, fetchSuggests);
}
