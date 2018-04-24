package com.labym.flood.admin.web.rest.vm;

import lombok.Data;

@Data
public class RegistrationVM {
    private String email;
    private String mobile;
    private String password;
    private CaptchaVM captcha;
}
