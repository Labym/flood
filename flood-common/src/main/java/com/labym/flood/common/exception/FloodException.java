package com.labym.flood.common.exception;

public  class FloodException extends RuntimeException {
    private FloodError error;
    private Object[] params;

    public FloodException(FloodError error,Object ... params) {
        super(error.getErrorDescription());
        this.error = error;
        this.params=params;
    }

    public FloodException( FloodError error, Throwable cause,Object...params) {
        super(error.getErrorDescription(), cause);
        this.error = error;
        this.params=params;
    }



    public FloodException(FloodError error, Throwable cause, boolean enableSuppression, boolean writableStackTrace, Object...params) {
        super(error.getErrorDescription(), cause, enableSuppression, writableStackTrace);
        this.error = error;
        this.params=params;
    }
}
