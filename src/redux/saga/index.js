import { all, fork} from 'redux-saga/effects';
import { watchLogin } from './authenticatorSaga';
// Imports: Redux Sagas
import { watchIncreaseCounter, watchDecreaseCounter } from './counterSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
    fork(watchLogin),
  ]);
};