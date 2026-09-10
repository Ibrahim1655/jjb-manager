package com.ibrahim.jjbmanager.repository;

import com.ibrahim.jjbmanager.entity.Belt;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeltRepository extends JpaRepository<Belt,Long> {

}
