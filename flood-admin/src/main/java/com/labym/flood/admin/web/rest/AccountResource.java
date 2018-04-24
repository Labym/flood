package com.labym.flood.admin.web.rest;

import com.labym.flood.admin.service.UserService;
import com.labym.flood.admin.web.rest.vm.RegistrationVM;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class AccountResource {

    private UserService userService;


    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public void registerAccount(@Valid @RequestBody RegistrationVM vm) {
        userService.register(vm.getEmail(),vm.getPassword());
    }
}
