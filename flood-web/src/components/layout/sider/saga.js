import { take, put,takeEvery ,call } from 'redux-saga/effects'
import {menus} from '../../../api/MenusApi'
import * as SiderActions from './action'


export function* loadingFlow(action) {
    try {
        console.log('loading menus')
        console.log(action)
        let result = yield call(menus);
        console.log(result)
        if(result.success){
            yield put(SiderActions.loadMenusSuccess(result.root))
        }else {
            yield put(SiderActions.loadMenusError)
        }
    } catch (error) {
        yield put(SiderActions.loadMenusError)
    }
}

export function* watchIncrementAsync() {
    yield takeEvery(SiderActions.LOAD_MENUS,loadingFlow)
}

export default function* SiderSaga() {
    yield [
        watchIncrementAsync()
    ]
}