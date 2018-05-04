import  LoginSaga from '../pages/login/saga'
import RegistrationSaga from '../components/registration/saga'
import SiderSaga from '../components/layout/sider/saga'
export default function* rootSaga() {
    yield [
        LoginSaga(),
        RegistrationSaga(),
        SiderSaga()
    ]
}
