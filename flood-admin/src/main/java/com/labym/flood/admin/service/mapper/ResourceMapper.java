package com.labym.flood.admin.service.mapper;

import com.labym.flood.admin.domain.Resource;
import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.service.EntityMapper;
import org.mapstruct.Mapper;

@Mapper(
    componentModel = "spring"
)
public interface ResourceMapper extends EntityMapper<ResourceDTO, Resource> {
  Resource toEntity(ResourceDTO resourceDTO);

  ResourceDTO toDto(Resource resource);
}
