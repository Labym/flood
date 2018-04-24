package com.labym.flood.admin.web.rest;

import com.labym.flood.admin.dto.UserDTO;
import com.labym.flood.admin.service.UserService;
import com.labym.flood.admin.web.rest.vm.ErrorVM;
import com.labym.flood.admin.web.rest.vm.LoginVM;
import com.labym.flood.admin.web.rest.vm.RegistrationVM;
import com.labym.flood.admin.web.rest.vm.TokenVM;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
public class UserEndpoint {
  private final UserService userService;

  public UserEndpoint(UserService userService) {
      this.userService = userService;
  }

  @PostMapping(path = "/login",consumes={MediaType.APPLICATION_JSON_UTF8_VALUE})
  public ResponseEntity login(@RequestBody LoginVM vm){
      if("test@a.com".equals(vm.getUsername())&&"123456".equals(vm.getPassword())&&"8888".equals(vm.getCaptcha())){
          TokenVM tokenVM=new TokenVM();
          tokenVM.setToken(UUID.randomUUID().toString());
          return ResponseEntity.ok(tokenVM);
      }

      ErrorVM error=new ErrorVM();
      error.setError("bad_request");
      error.setErrorDescription("username or password is incorrect");
      return ResponseEntity.badRequest().body(error);

  }

    @PostMapping(consumes={MediaType.APPLICATION_JSON_UTF8_VALUE})
    public ResponseEntity register(@RequestBody RegistrationVM vm){
        UserDTO user = userService.register(vm.getEmail(), vm.getPassword());
        return ResponseEntity.created(URI.create("/api/v1/users/"+user.getId())).build();

    }
}
