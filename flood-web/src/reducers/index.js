import {applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import {LoginReducer} from "../pages/login/reducer";
import {RegistrationReducer} from "../components/registration/reducer";
import {RouteReducer} from '../components/route/reducer'
import rootSaga from '../sagas'

import {routerMiddleware,} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    LoginReducer,RegistrationReducer, RouteReducer
})
export const store = createStore(rootReducer, applyMiddleware(routerMiddleware(history), sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

