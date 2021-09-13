import { all } from "redux-saga/effects";
import { waitForFetchProducts} from "../saga/saga";
import { waitForEditData} from "../saga/editSaga";
import { waitForDeleteData} from "../saga/deleteSaga";

export default function* rootSaga() {
  yield all([waitForFetchProducts(),waitForEditData(),waitForDeleteData()]);
}