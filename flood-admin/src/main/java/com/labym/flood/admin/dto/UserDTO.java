package com.labym.flood.admin.dto;

import java.lang.Boolean;
import java.lang.Long;
import java.lang.String;
import java.time.Instant;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor(force=true)
public class UserDTO {

  private Long id;

  private String login;

  private String firstName;

  private String lastName;

  private String email;

  private Boolean activated;

  private String langKey;

  private String imageUrl;

  private Instant resetDate;

}
