package com.labym.flood.admin.dto;

import com.labym.flood.common.dictionary.ResourceType;
import com.labym.flood.common.util.tree.Node;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ApiModel
public class ResourceDTO implements Node<Long> {

    private static final Long ROOT_ID=0L;

    @ApiModelProperty(readOnly = true)
    private Long id;

    private String name;

    private String url;

    private String code;

    private Long parentId;

    private ResourceType type;

    @ApiModelProperty(readOnly = true)
    private Instant createAt;

    @ApiModelProperty(readOnly = true)
    private Long createBy;

    private Map<String, Object> extensions;


    @Override
    public Long id() {
        return this.id;
    }

    @Override
    public Long parentId() {
        return this.parentId;
    }

    @Override
    public boolean isRoot() {
        return this.id==this.parentId;
    }
}
