package com.labym.flood.admin.service.impl;

import com.google.common.collect.Lists;
import com.labym.flood.admin.repository.UserRepository;
import com.labym.flood.dto.UserDetailsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public UserDetailsDTO loadUserByUsername(String username) throws UsernameNotFoundException {
        GrantedAuthority authority=new GrantedAuthority(){
            @Override
            public String getAuthority() {
                return "ADMIN";
            }
        };
     return    userRepository.findUserByLogin(username).map((user ->
             UserDetailsDTO.builder()
                    .username(username)
                    .password(user.getPassword())
                    .enabled(true)
                    .accountNonLocked(true)
                    .credentialsNonExpired(true)
                    .authorities(Lists.newArrayList(authority))
                    .accountNonExpired(true).build()
        )).orElseThrow(()->new UsernameNotFoundException(""));
    }
}
