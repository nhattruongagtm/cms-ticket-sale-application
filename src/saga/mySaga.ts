import { takeEvery } from "redux-saga/effects";
function* hello() {
  console.log("hello world!");
}

function* rootSaga() {
  yield takeEvery("*", hello);
}

export default rootSaga;