import { take, put,takeEvery,actionChannel } from 'redux-saga/effects'
import {login} from '../../api/UserApi'

export function* loginFlow(action) {
    console.log('saga in login flow')
    login(action.name,action.password,action.captcha,action.rememberMe).then((response)=>{
        console.log('login response:')
        console.log(response.data)
    })
}

export function* watchIncrementAsync() {
    yield takeEvery('LOGIN_SUBMIT',loginFlow)
}

export default function* LoginSaga() {
    yield [
        watchIncrementAsync()
    ]
}