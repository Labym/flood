package com.labym.flood.admin.domain;

import com.labym.flood.common.constant.DBConstants;
import com.labym.flood.converter.DictionaryValueJsonJpaConverter;
import com.labym.flood.domain.DictionaryValue;
import com.labym.flood.domain.util.FixedDBType;
import com.labym.flood.processor.annotation.DTO;
import com.labym.flood.processor.annotation.EnableCodeGenerator;
import lombok.Data;

import javax.persistence.*;
import java.time.Instant;

@DTO
@EnableCodeGenerator(controller = true)
@Data
@Entity
@Table(name = DBConstants.TABLE_PREFIX+"DICTIONARY",
indexes = {
        @Index(columnList = "group")
}
,uniqueConstraints = {
        @UniqueConstraint(columnNames={
                "group","name"
        })
}
)
public class Dictionary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String type;
    private String group;
    @Column(columnDefinition = FixedDBType.CLOB)
    @Convert(converter=DictionaryValueJsonJpaConverter.class)
    private DictionaryValue value;
    private Instant createAt;
    private Long createBy;
}
