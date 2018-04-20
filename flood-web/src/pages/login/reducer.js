import {LOGIN_ACTION} from "./action";

export const LoginReducer= (state = {}, action) => {
    console.log('in loginReducer')
    switch (action.type) {
        case 'LOGIN_SUBMIT':
            console.log('LOGIN_SUBMIT')
            return {signing: true}
        case LOGIN_ACTION.SUCCESS:
            console.log('login success')
            return state


        case LOGIN_ACTION.ERROR:
            console.log('login error')
            return {signing: false}

        default:
            return state

    }
}