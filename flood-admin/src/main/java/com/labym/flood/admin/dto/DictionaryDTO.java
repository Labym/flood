package com.labym.flood.admin.dto;

import com.labym.flood.domain.DictionaryValue;
import java.lang.Long;
import java.lang.String;
import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DictionaryDTO {
  private Long id;

  private String name;

  private String type;

  private String group;

  private DictionaryValue value;

  private Instant createAt;

  private Long createBy;
}
