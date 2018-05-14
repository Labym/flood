package com.labym.flood.admin.service.mapper;

import com.labym.flood.admin.domain.Dictionary;
import com.labym.flood.admin.dto.DictionaryDTO;
import com.labym.flood.service.EntityMapper;
import org.mapstruct.Mapper;

@Mapper(
    componentModel = "spring"
)
public interface DictionaryMapper extends EntityMapper<DictionaryDTO, Dictionary> {
  Dictionary toEntity(DictionaryDTO dictionaryDTO);

  DictionaryDTO toDto(Dictionary dictionary);
}
