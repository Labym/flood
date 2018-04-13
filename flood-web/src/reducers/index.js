import { createStore,combineReducers } from 'redux'
import {LoginReducer} from "../pages/login/reducer";

function counter(state = { count: 0 }, action) {
    const count = state.count
    switch (action.type) {
        case 'increase':
            return { count: count + 1 }
        default:
            return state
    }
}

// const rootReducer = combineReducers({
//     counter,LoginReducer
// })
export const  store=createStore(LoginReducer)
