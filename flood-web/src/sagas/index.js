import  LoginSaga from '../pages/login/saga'
export default function* rootSaga() {
    yield [
        LoginSaga()
    ]
}
