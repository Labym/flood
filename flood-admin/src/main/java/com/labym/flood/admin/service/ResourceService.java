package com.labym.flood.admin.service;

import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.common.dictionary.ResourceType;

import java.util.List;

public interface ResourceService {

    ResourceDTO create(ResourceDTO resource);

    List<ResourceDTO> findByResourceType(ResourceType type);
}
