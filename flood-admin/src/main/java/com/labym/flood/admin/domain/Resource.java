package com.labym.flood.admin.domain;

import com.labym.flood.common.constant.DBConstants;
import com.labym.flood.common.dictionary.ResourceType;
import com.labym.flood.converter.MapJsonJpaConverter;
import com.labym.flood.processor.annotation.DTO;
import com.labym.flood.processor.annotation.EnableCodeGenerator;
import lombok.Data;

import javax.persistence.*;
import java.util.Map;

@Data
@Entity
@Table(name = DBConstants.TABLE_PREFIX+"RESOURCE")
@EnableCodeGenerator
public class Resource {
    @Id
    private Long id;
    private String name;
    private String url;
    private String code;
    private ResourceType type;

    @Column()
    @Convert(converter=MapJsonJpaConverter.class)
    private Map<String,Object> extensions;
}
