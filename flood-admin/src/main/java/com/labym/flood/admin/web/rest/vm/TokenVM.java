package com.labym.flood.admin.web.rest.vm;

import lombok.Data;

@Data
public class TokenVM {
    private String token;
    private String expiredIn;
}
