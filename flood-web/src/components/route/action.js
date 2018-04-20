
export const ROUTE_ACTION = {
    AUTHORIZED: 'COMMON_AUTHORIZED',
    UNAUTHORIZED: 'COMMON_UNAUTHORIZED',
}
export const authorized =() => {
    return {
        type: ROUTE_ACTION.AUTHORIZED
    }
}


export const unauthorized =() => {
    return {
        type: ROUTE_ACTION.UNAUTHORIZED
    }
}