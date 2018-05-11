import {SIDER_ACTION} from "./action";
import Immutable from "immutable";
import {isEmpty, isNull} from 'lodash'

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
                menus: expandTree(action.data.root),
                loading:false
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

const expandTree = (root) => {
    let children = null;
    if (!isEmpty(root.children)) {
        children=new Array();
        root.children.forEach(child=>{
            children.push(expandTree(child))
        })
    }
    return {
        ...root.data,
        children: children,
    }
}