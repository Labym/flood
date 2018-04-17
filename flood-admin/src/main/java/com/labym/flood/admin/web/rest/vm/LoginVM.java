package com.labym.flood.admin.web.rest.vm;

import lombok.Data;


@Data
public class LoginVM {
    private String username;
    private String password;
    private String captcha;
    private boolean rememberMe;
}
