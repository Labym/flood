package com.labym.flood.admin.repository;

import com.labym.flood.admin.domain.User;
import java.lang.Long;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsUserByLogin(String login);

    Optional<User> findUserByLogin(String login);
}
