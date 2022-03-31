import { all } from "redux-saga/effects";
import updatePackageSaga from "./updatePackageSaga";
import addPackageSaga from "./addPackageSaga";

function* rootSaga() {
  yield all([addPackageSaga(),updatePackageSaga()]);
}

export default rootSaga;
