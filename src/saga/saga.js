import { takeEvery, call, put } from "redux-saga/effects";
import productsService from "../service/service";
import { setProducts } from "../redux/action";

function* fetchProducts(action) {

  try {
    const products = yield call(productsService.getAllProducts);

    yield put(setProducts(products));
  } catch (e) {}
}

export function* waitForFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS", fetchProducts);
}


