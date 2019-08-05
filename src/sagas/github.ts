import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import ActionType from '../actions/ActionType';
import { getMembers } from '../actions/Github';
import { getMembersFactory } from '../services/github/api';

function* runGetMembers(action: ReturnType<typeof getMembers.start>) {
  const { companyName } = action.payload;
  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName);
    yield put(getMembers.succeed({ companyName }, { users }));
  } catch (error) {
    yield put(getMembers.fail({ companyName }, error));
  }
}

export function* watchGetMembers() {
  yield takeLatest(ActionType.GET_MEMBERS_START, runGetMembers);
}

export default function* rootSaga() {
  yield all([fork(watchGetMembers)]);
}
