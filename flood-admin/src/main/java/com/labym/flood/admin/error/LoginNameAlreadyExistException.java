package com.labym.flood.admin.error;

import com.labym.flood.common.exception.FloodError;
import com.labym.flood.common.exception.FloodException;

public class LoginNameAlreadyExistException extends FloodException {

    private static final FloodError LOGIN_NAME_EXIST_ERROR=new FloodError("login_exist","login name %s already existed");

    public LoginNameAlreadyExistException(Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, params);
    }

    public LoginNameAlreadyExistException(Throwable cause, Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, cause, params);
    }

    public LoginNameAlreadyExistException(Throwable cause, boolean enableSuppression, boolean writableStackTrace, Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, cause, enableSuppression, writableStackTrace, params);
    }
}
