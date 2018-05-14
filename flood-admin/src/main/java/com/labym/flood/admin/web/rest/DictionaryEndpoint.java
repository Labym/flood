package com.labym.flood.admin.web.rest;

import  org.springframework.web.bind.annotation.RestController;
import com.labym.flood.admin.service.DictionaryService;

@RestController
public class DictionaryEndpoint {
  private final DictionaryService dictionaryService;

  public DictionaryEndpoint(DictionaryService dictionaryService) {
      this.dictionaryService = dictionaryService;
  }
}
