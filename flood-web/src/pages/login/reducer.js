import {LOGIN_ACTION} from "./action";

export const LoginReducer= (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN_SUBMIT':
            return {rememberMe: !state.rememberMe}


        case LOGIN_ACTION.SUCCESS:
            console.log('login success')
            return state


        case LOGIN_ACTION.ERROR:
            console.log('login error')
            return state

    }
}