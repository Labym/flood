import { take, put,takeEvery ,call } from 'redux-saga/effects'
import {register} from '../../api/UserApi'
import * as RegistrationAction from './action'
import * as RouteActions from '../../components/route/action'

export function* registerFlow(action) {
    console.log('saga in register flow')

    try {

        let result = yield call(register,action.data);
        if(result.success){
            yield put(RegistrationAction.success(result.email))
            yield put(RouteActions.authorized)
        }else {
            yield put(RegistrationAction.error(result.error))
        }
    } catch (error) {
        yield put(RegistrationAction.error)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery(RegistrationAction.ACTION.REGISTRATION,registerFlow)
}

export default function* RegistrationSaga() {
    yield [
        watchIncrementAsync()
    ]
}