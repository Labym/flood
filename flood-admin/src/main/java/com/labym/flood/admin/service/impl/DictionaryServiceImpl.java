package com.labym.flood.admin.service.impl;

import com.labym.flood.admin.repository.DictionaryRepository;
import com.labym.flood.admin.service.DictionaryService;
import org.springframework.stereotype.Service;

@Service
public class DictionaryServiceImpl implements DictionaryService {
  private final DictionaryRepository dictionaryRepository;

  public DictionaryServiceImpl(DictionaryRepository dictionaryRepository) {
      this.dictionaryRepository = dictionaryRepository;
  }
}
