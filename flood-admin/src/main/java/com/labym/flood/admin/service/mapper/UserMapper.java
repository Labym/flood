package com.labym.flood.admin.service.mapper;

import com.labym.flood.admin.domain.User;
import com.labym.flood.admin.dto.UserDTO;
import org.springframework.stereotype.Service;

@Service
public class UserMapper {
  public User dtoToUser(UserDTO userDTO) {
    if (null==userDTO) {
      return null;
    }
    User user = new User();
    user.setId(userDTO.getId());
    user.setLogin(userDTO.getLogin());
    user.setName(userDTO.getName());
    user.setGender(userDTO.getGender());
    user.setLanguage(userDTO.getLanguage());
    user.setState(userDTO.getState());
    user.setBirthday(userDTO.getBirthday());
    return user;
  }

  public UserDTO userToDTO(User user) {
    if (null==user) {
      return null;
    }
    UserDTO userDTO = UserDTO.builder()
                    .id(user.getId())
                    .login(user.getLogin())
                    .name(user.getName())
                    .gender(user.getGender())
                    .language(user.getLanguage())
                    .state(user.getState())
                    .birthday(user.getBirthday())
                    .build();
    return userDTO;
  }
}
