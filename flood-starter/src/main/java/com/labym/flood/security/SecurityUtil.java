package com.labym.flood.security;

import com.labym.flood.dto.UserDetailsDTO;

public class SecurityUtil {

    private SecurityUtil(){}

    private static final UserDetailsDTO current=UserDetailsDTO.builder().id(0L).build();


    public static final UserDetailsDTO currentUser(){
        return current;
    }

}
