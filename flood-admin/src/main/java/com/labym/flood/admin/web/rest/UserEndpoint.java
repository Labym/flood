package com.labym.flood.admin.web.rest;

import  org.springframework.web.bind.annotation.RestController;
import com.labym.flood.admin.service.UserService;

@RestController
public class UserEndpoint {
  private final UserService userService;

  public UserEndpoint(UserService userService) {
      this.userService = userService;
  }
}
