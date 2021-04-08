import {POST_ITEM_START, postItemSuccess} from "../store/actions/listActions";
import {call, put, takeLatest} from "redux-saga/effects"
import {doPost} from "../api/mockedApi";

export function* postItemWatcher() {
    yield takeLatest(POST_ITEM_START, postItemWorker);
}

function* postItemWorker(action) {
    try {
        const response = yield call(doPost, action.payload)
        yield put(postItemSuccess(response))
    } catch (e) {
        alert(e.message)
    }
}
