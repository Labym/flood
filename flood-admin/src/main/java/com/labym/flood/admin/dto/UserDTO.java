package com.labym.flood.admin.dto;

import com.labym.flood.common.dictionary.Gender;
import com.labym.flood.common.dictionary.State;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.ZonedDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;

    private String login;

    private String name;

    private Gender gender;

    private String language;

    private State state;

    private ZonedDateTime birthday;
}
