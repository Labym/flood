package com.labym.flood.admin.dto;

import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
@Builder
public class UserDetailsDTO implements UserDetails {

    private String password;
    private String username;
    private Collection<? extends GrantedAuthority> authorities;

    private boolean credentialsNonExpired;
    private boolean accountNonExpired;
    private boolean accountNonLocked;
    private boolean enabled;

}
