import { call, put, takeLatest } from 'redux-saga/effects';
import { inited, loadedData, tryAuthDone } from './actions';
import { AppActionType } from '@models/app';
// import initService from '../../initSDK';

function* init() {
  //init service as api
  // const data = yield call(initService);
  //  yield put(inited(data));
}

function* load() {
  const data = {
    // put data if need here
  };
  // finished app loading
  yield put(loadedData(data));
}

function* tryAuth() {
  yield put(tryAuthDone());
}

function* appSaga() {
  yield takeLatest(AppActionType.INIT, init);
  yield takeLatest(AppActionType.LOAD_DATA, load);
  yield takeLatest(AppActionType.TRY_AUTH, tryAuth);
}

export default appSaga;
