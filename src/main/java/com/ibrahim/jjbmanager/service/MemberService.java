package com.ibrahim.jjbmanager.service;

import com.ibrahim.jjbmanager.entity.Member;
import com.ibrahim.jjbmanager.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public List<Member> getAllMembers(){
        return memberRepository.findAll();
    }
    /*
    getMemberById retourne pas directement un Member mais Optional qui contient
    le member s'il existe,sinon le Optional est vide
    la méthode orElseThrow() lance une exception s'il n'y a pas de member
    */

    public Member getMemberByID(Long id){
        return memberRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Licencié non trouvé"));
    }

    public Member createMember(Member member){
        return memberRepository.save(member);
    }

    public Member updateMember(Long id, Member updatedMember){
        Member existing = getMemberByID(id);
        existing.setFirstName(updatedMember.getFirstName());
        existing.setLastName(updatedMember.getLastName());
        existing.setBirthDate(updatedMember.getBirthDate());
        existing.setWeight(updatedMember.getWeight());
        existing.setRegistrationDate(updatedMember.getRegistrationDate());
        existing.setActive(updatedMember.getActive());
        existing.setBelt(updatedMember.getBelt());
        return memberRepository.save(existing);
    }

    public void deleteMember(Long id){
        getMemberByID(id);
        memberRepository.deleteById(id);
    }


}
