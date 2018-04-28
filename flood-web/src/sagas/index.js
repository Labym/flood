import  LoginSaga from '../pages/login/saga'
import RegistrationSaga from '../components/registration/saga'
export default function* rootSaga() {
    yield [
        LoginSaga(),
        RegistrationSaga()
    ]
}
