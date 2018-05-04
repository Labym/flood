package com.labym.flood.admin.service.impl;

import com.google.common.collect.TreeMultiset;
import com.labym.flood.admin.domain.Resource;
import com.labym.flood.admin.dto.ResourceDTO;
import com.labym.flood.admin.error.AlreadyExistException;
import com.labym.flood.admin.repository.ResourceRepository;
import com.labym.flood.admin.service.ResourceService;
import com.labym.flood.admin.service.mapper.ResourceMapper;
import com.labym.flood.common.dictionary.ResourceType;
import com.labym.flood.common.util.tree.Tree;
import com.labym.flood.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class ResourceServiceImpl implements ResourceService {
  private final ResourceRepository resourceRepository;
  private final ResourceMapper resourceMapper;

    public ResourceServiceImpl(ResourceRepository resourceRepository, ResourceMapper resourceMapper) {
        this.resourceRepository = resourceRepository;
        this.resourceMapper = resourceMapper;
    }

    @Override
    public ResourceDTO create(ResourceDTO resourceDTO) {
        if (resourceRepository.existsByNameOrCode(resourceDTO.getName(),resourceDTO.getCode())){
            throw new AlreadyExistException(String.format("resource name(%s) or code(%s)",resourceDTO.getName(),resourceDTO.getCode()));
        }
        resourceDTO.setCreateAt(Instant.now());
        resourceDTO.setCreateBy(SecurityUtil.currentUser().getId());
        Resource resource = resourceRepository.save(resourceMapper.toEntity(resourceDTO));
        return resourceMapper.toDto(resource);
    }

    @Override
    public List<ResourceDTO> findByResourceType(ResourceType type) {
        List<Resource> menus = resourceRepository.findByType(ResourceType.MENU);
        TreeMultiset<Comparable> tree = TreeMultiset.create();
        //TreeMultiset.create()
        return null;
    }

    @Override
    public Tree<ResourceDTO, Long> currentUserMenus() {
        List<Resource> menus = resourceRepository.findByType(ResourceType.MENU);
        List<ResourceDTO> resourceDTOS = resourceMapper.toDto(menus);
        return new Tree<>(resourceDTOS);
    }
}
