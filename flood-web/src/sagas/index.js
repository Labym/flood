import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'

export function* loginFlow(action) {

    while (true){
        const request=yield take('LOGIN_SUBMIT')
        console.log('on login flow')
        const loginData = request.data;
        yield put({type: "LOGIN_SUCCESS"});
    }

}
// function* mySaga() {
//     yield* takeEvery("USER_FETCH_REQUESTED", loginFlow);
// }
//
//
// export function* mySaga() {
//     yield* takeLatest("USER_FETCH_REQUESTED", loginFlow);
// }

