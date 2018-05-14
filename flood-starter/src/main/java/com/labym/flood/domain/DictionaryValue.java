package com.labym.flood.domain;

import com.fasterxml.jackson.annotation.JsonAnySetter;

import java.util.Map;

public class DictionaryValue {
    private Object value;

    @JsonAnySetter
    private Map<String,Object> extensions;
}
