import {SIDER_ACTION} from "./action";
import Immutable from "immutable";
const initialState = Immutable.fromJS({
    menus: {},
    loading: false
})

export const SiderReducer = (state = initialState, action) => {

    switch (action.type) {
        case SIDER_ACTION.LOADING:
            return state.merge({
                loading: true,
            })
        case SIDER_ACTION.SUCCESS:
            console.log('loading success')
            return state.merge({
                menus: action.data,
            })


        case SIDER_ACTION.ERROR:
            console.log('login error')
            return state.merge({
                signing: false,
            })

        default:
            return state

    }
}