import {LOGIN_ACTION} from "./action";
import Immutable from "immutable";
import { message } from 'antd';
const initialState = Immutable.fromJS({
    authorized: false,
    signing: false
})

export const LoginReducer = (state = initialState, action) => {
    console.log('in loginReducer')
    console.log(action)
    switch (action.type) {
        case 'LOGIN_SUBMIT':
            console.log('LOGIN_SUBMIT')
            return state.merge({
                signing: true,
            })
        case LOGIN_ACTION.SUCCESS:
            console.log('login success')
            message.success('login success', 10)
            sessionStorage.setItem("login",true)
            return state.merge({
                authorized: true,
            })


        case LOGIN_ACTION.ERROR:
            console.log('login error')
            message.error('login error',5)
            return state.merge({
                signing: false,
            })

        default:
            return state

    }
}