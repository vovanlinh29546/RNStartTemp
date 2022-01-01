import { all, fork } from 'redux-saga/effects';
import appSaga from '@screens/App/saga';

export default function* rootSaga() {
  yield all([
    fork(appSaga),
  ]);
}
