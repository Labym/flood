package com.labym.flood.admin.service.impl;

import com.labym.flood.admin.domain.Resource;
import com.labym.flood.admin.error.AlreadyExistException;
import com.labym.flood.admin.repository.ResourceRepository;
import com.labym.flood.admin.service.ResourceService;
import com.labym.flood.security.SecurityUtil;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class ResourceServiceImpl implements ResourceService {
  private final ResourceRepository resourceRepository;

  public ResourceServiceImpl(ResourceRepository resourceRepository) {
      this.resourceRepository = resourceRepository;
  }


    @Override
    public void create(Resource resource) {
        if (resourceRepository.existsByNameOrCode(resource.getName(),resource.getCode())){
            throw new AlreadyExistException(String.format("resource name(%s) or code(%s)",resource.getName(),resource.getCode()));
        }
        resource.setCreateAt(Instant.now());
        resource.setCreateBy(SecurityUtil.currentUser().getId());
        resourceRepository.save(resource);
    }
}
