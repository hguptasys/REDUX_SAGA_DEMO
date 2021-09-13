import { takeEvery, call, put } from "redux-saga/effects";
import productsService from "../service/service";
import { setProducts ,edit,deleteData} from "../redux/action";

function* delete_data(action) {

 console.log("delete_data_saga",action.data)
 yield put(deleteData(action.data));
}

export function* waitForDeleteData() {
  yield takeEvery("DELETE_DATA", delete_data);
}


