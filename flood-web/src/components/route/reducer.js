import {ROUTE_ACTION} from "./action";

export const RouteReducer= (state , action) => {
    switch (action.type) {
        case ROUTE_ACTION.AUTHORIZED:
            console.log('Authorized')
            return {authorized: true}
        case ROUTE_ACTION.UNAUTHORIZED:
            console.log('Unauthorized')
            return {authorized: false}
        default:
            return state
    }
}