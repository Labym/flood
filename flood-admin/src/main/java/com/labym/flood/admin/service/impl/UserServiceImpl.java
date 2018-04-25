package com.labym.flood.admin.service.impl;

import com.labym.flood.admin.domain.User;
import com.labym.flood.admin.dto.UserDTO;
import com.labym.flood.admin.error.LoginNameAlreadyExistException;
import com.labym.flood.admin.repository.UserRepository;
import com.labym.flood.admin.service.UserService;
import com.labym.flood.admin.service.mapper.UserMapper;
import com.labym.flood.common.dictionary.Gender;
import com.labym.flood.common.dictionary.State;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private UserMapper userMapper;

  public UserServiceImpl(UserRepository userRepository,PasswordEncoder passwordEncoder) {
      this.userRepository = userRepository;
      this.passwordEncoder=passwordEncoder;
  }


//  private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO register(String login, String password) {
        if(loginNameExist(login)){
            throw new LoginNameAlreadyExistException(login);
        }
        User user=new User();
        user.setState(State.INACTIVE);
        user.setGender(Gender.UNKNOWN);
        user.setLogin(login);
        user.setPassword(passwordEncoder.encode(password));
        user.setBirthday(ZonedDateTime.now());
        userRepository.save(user);

        return null;
    }

    @Override
    public boolean loginNameExist(String login) {
        return userRepository.existsUserByLogin(login);
    }

}
