package com.labym.flood.admin.domain;

import com.labym.flood.common.constant.DBConstants;
import com.labym.flood.common.dictionary.Gender;
import com.labym.flood.common.dictionary.UserState;
import com.labym.flood.processor.annotation.DTO;
import com.labym.flood.processor.annotation.EnableCodeGenerator;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.ZonedDateTime;

@EnableCodeGenerator(controller = true)
@Entity
@DTO(
        exclude = {
                "password","slat"
        }
)
@Data
@Table(name = DBConstants.TABLE_PREFIX+"USER")
public class User {

    @Id
    private Long id;
    private String login;
    private String name;
    private Gender gender;
    private String language;
    private UserState state;
    private String password;
    private String slat;
    private ZonedDateTime birthday;
}
