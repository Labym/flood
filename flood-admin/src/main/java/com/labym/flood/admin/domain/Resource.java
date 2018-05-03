package com.labym.flood.admin.domain;

import com.labym.flood.common.constant.DBConstants;
import com.labym.flood.common.dictionary.ResourceType;
import com.labym.flood.converter.MapJsonJpaConverter;
import com.labym.flood.domain.util.FixedDBType;
import com.labym.flood.processor.annotation.EnableCodeGenerator;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;
import java.util.Map;

@Data
@Entity
@Table(name = DBConstants.TABLE_PREFIX+"RESOURCE")
@EnableCodeGenerator(controller = true)
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String url;
    private String code;
    private ResourceType type;


    private Instant createAt;
    private Long createBy;


//    @Lob

    @Column(columnDefinition = FixedDBType.CLOB)
    @Convert(converter=MapJsonJpaConverter.class)
    private Map<String,Object> extensions;
}
