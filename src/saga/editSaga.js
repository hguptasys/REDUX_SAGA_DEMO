import { takeEvery, call, put } from "redux-saga/effects";
import productsService from "../service/service";
import { setProducts ,edit} from "../redux/action";

function* edit_data(action) {

 console.log("edit_saga",action.data)
 yield put(edit(action.data));
}

export function* waitForEditData() {
  yield takeEvery("EDIT_DATA", edit_data);
}


