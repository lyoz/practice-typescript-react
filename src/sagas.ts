import { all, put, takeEvery, call } from 'redux-saga/effects'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementAsync() {
  const x = call(sleep, 1000)
  console.log(x)
  yield x
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* rootSaga() {
  yield all([watchIncrementAsync()])
}
