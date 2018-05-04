export const LOAD_MENUS = 'LOAD_MENUS'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const SIDER_ACTION = {
    LOADING: 'SIDER_LOAD_MENUS',
    SUCCESS: 'SIDER_LOAD_MENUS_SUCCESS',
    ERROR: 'SIDER_LOAD_MENUS_ERROR'
}
export const loadMenus =() => {
    return {
        type: SIDER_ACTION.LOADING
    }
}

export const loadMenusSuccess =(data)=> {
   return {
       type: SIDER_ACTION.SUCCESS,data
   }
}

export const loadMenusError = {
    type: SIDER_ACTION.ERROR
}