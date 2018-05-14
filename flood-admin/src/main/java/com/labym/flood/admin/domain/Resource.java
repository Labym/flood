package com.labym.flood.admin.domain;

import com.labym.flood.common.constant.DBConstants;
import com.labym.flood.common.dictionary.ResourceType;
import com.labym.flood.converter.MapJsonJpaConverter;
import com.labym.flood.domain.util.FixedDBType;
import com.labym.flood.processor.annotation.DTO;
import com.labym.flood.processor.annotation.EnableCodeGenerator;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;
import java.util.Map;

@DTO
@EnableCodeGenerator(controller = true)
@Data
@Entity
@Table(name = DBConstants.TABLE_PREFIX+"RESOURCE")
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(length = 100)
    private String name;
    @Column(length = 1000)
    private String url;
    @Column(length = 100)
    private String code;
    private Long parentId;
    @Enumerated(EnumType.STRING)
    private ResourceType type;
    private Instant createAt;
    private Long createBy;


//    @Lob

    @Column(columnDefinition = FixedDBType.CLOB)
    @Convert(converter=MapJsonJpaConverter.class)
    private Map<String,Object> extensions;
}
