import thunk from 'redux-thunk'
import { createStore,combineReducers,applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger  from 'redux-logger'
import {LoginReducer} from "../pages/login/reducer";
import rootSaga from '../sagas'

function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}
 const sagaMiddleware = createSagaMiddleware()
// const rootReducer = combineReducers({
//     counter,LoginReducer
// })
const  store=createStore(LoginReducer,applyMiddleware(sagaMiddleware,logger))
sagaMiddleware.run(rootSaga)
export default store

