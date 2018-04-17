export const LOGIN_SUBMIT = 'LOGIN_SUBMIT'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGIN_ACTION = {
    LOGIN: 'LOGIN_SUBMIT',
    SUCCESS: 'LOGIN_SUCCESS',
    ERROR: 'LOGIN_ERROR'
}
export const login =(name,password,captcha,rememberMe=false) => {
   return {
       type: 'LOGIN_SUBMIT',
       name,password,captcha,rememberMe
   }
}

export const loginSuccess = {
    type: LOGIN_ACTION.SUCCESS
}

export const loginError = {
    type: LOGIN_ACTION.ERROR
}