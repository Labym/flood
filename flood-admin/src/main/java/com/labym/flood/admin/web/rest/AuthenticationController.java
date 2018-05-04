package com.labym.flood.admin.web.rest;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.labym.flood.admin.domain.User;
import com.labym.flood.admin.repository.UserRepository;
import com.labym.flood.admin.service.UserService;
import com.labym.flood.admin.web.rest.vm.LoginVM;
import com.labym.flood.security.jwt.JWTConfigurer;
import com.labym.flood.security.jwt.TokenProvider;
import io.micrometer.core.annotation.Timed;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AuthenticationController {

    private final TokenProvider tokenProvider;

    private final AuthenticationManager authenticationManager;

    private final UserRepository userRepository;

    public AuthenticationController(TokenProvider tokenProvider, AuthenticationManager authenticationManager, UserRepository userRepository) {
        this.tokenProvider = tokenProvider;
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
    }

    @PostMapping("/authenticate")
    @Timed
    public ResponseEntity<JWTToken> authorize(@Valid @RequestBody LoginVM loginVM) throws UsernameNotFoundException  {


        Optional<User> userOptional = userRepository.findUserByLogin(loginVM.getUsername());
       return userOptional.map(user ->
             authenticate(loginVM,user.getSalt())
        ).orElseThrow(()->new UsernameNotFoundException("can't find User by login("+loginVM.getUsername()+")"));

               //.orElse(ResponseEntity.notFound().build());




    }

    private ResponseEntity<JWTToken> authenticate(LoginVM loginVM,String salt) {
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginVM.getUsername(), loginVM.getPassword()+salt);

        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        boolean rememberMe = loginVM.isRememberMe();
        String jwt = tokenProvider.createToken(authentication, rememberMe);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
        return new ResponseEntity<>(new JWTToken(jwt), httpHeaders, HttpStatus.OK);
    }


    /**
     * Object to return as body in JWT Authentication.
     */
    static class JWTToken {

        private String idToken;

        JWTToken(String idToken) {
            this.idToken = idToken;
        }

        @JsonProperty("token")
        String getIdToken() {
            return idToken;
        }

        void setIdToken(String idToken) {
            this.idToken = idToken;
        }
    }
}
