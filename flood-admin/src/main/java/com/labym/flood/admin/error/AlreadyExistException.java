package com.labym.flood.admin.error;

import com.labym.flood.common.exception.FloodError;
import com.labym.flood.common.exception.FloodException;


public class AlreadyExistException extends FloodException {
    private static final FloodError LOGIN_NAME_EXIST_ERROR=new FloodError("already_exist","%s already existed");

    public AlreadyExistException(Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, params);
    }

    public AlreadyExistException(Throwable cause, Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, cause, params);
    }

    public AlreadyExistException(Throwable cause, boolean enableSuppression, boolean writableStackTrace, Object... params) {
        super(LOGIN_NAME_EXIST_ERROR, cause, enableSuppression, writableStackTrace, params);
    }
}
