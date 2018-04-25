package com.labym.flood.admin.service.impl;

import com.google.common.collect.Lists;
import com.labym.flood.admin.dto.UserDetailsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public UserDetailsDTO loadUserByUsername(String username) throws UsernameNotFoundException {
        String encode = passwordEncoder.encode("123123");
        GrantedAuthority authority=new GrantedAuthority(){
            @Override
            public String getAuthority() {
                return "ADMIN";
            }
        };
        return UserDetailsDTO.builder()
                .username(username)
                .password(encode)
                .enabled(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .authorities(Lists.newArrayList(authority))
                .accountNonExpired(true).build();
    }
}
