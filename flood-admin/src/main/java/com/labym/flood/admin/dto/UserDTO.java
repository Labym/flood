package com.labym.flood.admin.dto;

import com.labym.flood.common.dictionary.Gender;
import com.labym.flood.common.dictionary.UserState;
import java.lang.Long;
import java.lang.String;
import java.time.ZonedDateTime;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class UserDTO {
  private Long id;

  private String login;

  private String name;

  private Gender gender;

  private String language;

  private UserState state;

  private ZonedDateTime birthday;
}
