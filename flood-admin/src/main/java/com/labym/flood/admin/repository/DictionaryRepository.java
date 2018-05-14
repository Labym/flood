package com.labym.flood.admin.repository;

import com.labym.flood.admin.domain.Dictionary;
import java.lang.Long;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DictionaryRepository extends JpaRepository<Dictionary, Long> {
}
