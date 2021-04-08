import {GET_LIST_START, getListSuccess} from "../store/actions/listActions";
import {takeLatest, call, put} from "redux-saga/effects"
import {doGet} from "../api/mockedApi";

export function* getListWatcher() {
    yield takeLatest(GET_LIST_START, getListWorker);
}

function* getListWorker() {
    const response = yield call(doGet)
    yield put(getListSuccess(response.lista))
}