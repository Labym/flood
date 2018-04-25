package com.labym.flood.admin.service.mapper;

import com.labym.flood.admin.domain.User;
import com.labym.flood.admin.dto.UserDTO;
import com.labym.flood.service.EntityMapper;
import org.mapstruct.Mapper;

@Mapper(
    componentModel = "spring"
)
public interface UserMapper extends EntityMapper<UserDTO, User> {
  User toEntity(UserDTO userDTO);

  UserDTO toDto(User user);
}
