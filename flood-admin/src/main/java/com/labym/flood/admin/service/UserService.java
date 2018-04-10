package com.labym.flood.admin.service;

import com.labym.flood.admin.dto.UserDTO;

public interface UserService {
    UserDTO register(String login,String password);

    boolean loginNameExist(String login);
}
