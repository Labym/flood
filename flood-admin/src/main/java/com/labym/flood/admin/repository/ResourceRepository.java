package com.labym.flood.admin.repository;

import com.labym.flood.admin.domain.Resource;
import java.lang.Long;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {

    boolean existsByNameOrCode(String name,String code);
}
