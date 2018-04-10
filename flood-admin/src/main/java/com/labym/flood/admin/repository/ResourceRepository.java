package com.labym.flood.admin.repository;

import com.labym.flood.admin.domain.Resource;
import java.lang.Long;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResourceRepository extends JpaRepository<Resource, Long> {
}
