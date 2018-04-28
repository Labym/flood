package com.labym.flood.admin.service.impl;

import com.labym.flood.admin.domain.User;
import com.labym.flood.admin.dto.UserDTO;
import com.labym.flood.admin.error.LoginNameAlreadyExistException;
import com.labym.flood.admin.repository.UserRepository;
import com.labym.flood.admin.service.UserService;
import com.labym.flood.admin.service.mapper.UserMapper;
import com.labym.flood.common.constant.LangKey;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    //  private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO register(String email, String password) {
        if(loginNameExist(email)){
            throw new LoginNameAlreadyExistException(email);
        }
        User user=new User();
        user.setLogin(email);
        user.setEmail(email);
        user.setSalt(UUID.randomUUID().toString());
        password=password+user.getSalt();
        user.setPassword(passwordEncoder.encode(password));
        user.setActivated(false);
        user.setActivationKey(UUID.randomUUID().toString());
        user.setLangKey(LangKey.ZH);
        userRepository.save(user);

        return userMapper.toDto(user);
    }

    @Override
    public boolean loginNameExist(String login) {
        return userRepository.existsUserByLogin(login);
    }

    @Override
    public Optional<UserDTO> findByLogin(String login) {
        return userRepository.findUserByLogin(login).map((user -> Optional.of(userMapper.toDto(user)))).orElse(Optional.empty());
    }
}
