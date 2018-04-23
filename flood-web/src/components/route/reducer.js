import {ROUTE_ACTION} from "./action";
import {
    push
} from 'react-router-redux'
import Immutable from "immutable";

const initialState = Immutable.fromJS({
    authorized: false
})
export const RouteReducer= (state=initialState , action) => {
    switch (action.type) {
        case ROUTE_ACTION.AUTHORIZED:

            push('/')
            console.log('Authorized')
            return  state.merge({
                authorized: true,
            })
        case ROUTE_ACTION.UNAUTHORIZED:
            console.log('Unauthorized')
            return {authorized: false}
        default:
            return state
    }
}