import {ACTION} from "./action";
import Immutable from "immutable";

const initialState = Immutable.fromJS({
    email:'',
    state:'',
    success:false,
    error:''
})

export const RegistrationReducer = (state = initialState, action) => {
    console.log('in RegistrationReducer')
    console.log(action)
    switch (action.type) {
        case ACTION.REGISTRATION:
            return state.merge({
                email: action.email
            })
        case ACTION.SUCCESS:
            return state.merge({
                success: true,
            })


        case ACTION.ERROR:
            return state.merge({
                success: false,
            })

        default:
            return state

    }
}