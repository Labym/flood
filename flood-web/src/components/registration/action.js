
export const ACTION = {
    REGISTRATION: 'REGISTRATION_SUBMIT',
    SUCCESS: 'REGISTRATION_SUCCESS',
    ERROR: 'REGISTRATION_ERROR'
}
export const register =(data) => {
    return {
        type: ACTION.REGISTRATION,
        data
    }
}

export const success =(email) => {
    return {
        type: ACTION.SUCCESS,
        email:email
    }
}

export const error =(error='') => {
    return {
        type: ACTION.ERROR,
        error:error
    }
}