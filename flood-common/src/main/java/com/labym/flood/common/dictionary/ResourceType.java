package com.labym.flood.common.dictionary;

public enum ResourceType {
    MENU,
    FUNCTION,
    INTERFACE,
    OPERATION,;
    private String scheme;

    public String scheme() {
        return this.scheme;
    }

    static {
        MENU.scheme = "menu://";
        FUNCTION.scheme = "function://";
        INTERFACE.scheme = "http://";
        OPERATION.scheme = "opt://";
    }
}
