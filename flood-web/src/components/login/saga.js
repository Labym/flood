import { take, put,takeEvery ,call } from 'redux-saga/effects'
import {login} from '../../api/UserApi'
import * as LoginActions from './action'
import * as RouteActions from '../../components/route/action'

export function* loginFlow(action) {
    console.log('saga in login flow')

    try {
        console.log(action)
        let result = yield call(login,action.data);
        console.log("login result:")
        console.log(result)
        if(result.success){
            yield put(LoginActions.loginSuccess)
            yield put(RouteActions.authorized)
        }else {
            yield put(LoginActions.loginError)
        }
    } catch (error) {
        yield put(LoginActions.loginError)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery('LOGIN_SUBMIT',loginFlow)
}

export default function* LoginSaga() {
    yield [
        watchIncrementAsync()
    ]
}