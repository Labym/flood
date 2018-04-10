package com.labym.flood.admin.service.impl;

import com.labym.flood.admin.repository.ResourceRepository;
import com.labym.flood.admin.service.ResourceService;
import org.springframework.stereotype.Service;

@Service
public class ResourceServiceImpl implements ResourceService {
  private final ResourceRepository resourceRepository;

  public ResourceServiceImpl(ResourceRepository resourceRepository) {
      this.resourceRepository = resourceRepository;
  }
}
