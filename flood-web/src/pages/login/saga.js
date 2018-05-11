import { take, put,takeEvery ,call } from 'redux-saga/effects'
import {login} from '../../api/UserApi'
import * as LoginActions from './action'
import * as RouteActions from '../../components/route/action'

export function* loginFlow(action) {
    try {
        let result = yield call(login,action.data);
        if(result.success){
            yield put(LoginActions.loginSuccess(result))
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