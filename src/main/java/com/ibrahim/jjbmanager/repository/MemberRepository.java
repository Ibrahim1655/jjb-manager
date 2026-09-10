package com.ibrahim.jjbmanager.repository;

import com.ibrahim.jjbmanager.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}
