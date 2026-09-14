package com.ibrahim.jjbmanager.controller;

import com.ibrahim.jjbmanager.entity.Member;
import com.ibrahim.jjbmanager.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping
    public ResponseEntity<List<Member>> getAllMembers(){
        List<Member> members = memberService.getAllMembers();
        return ResponseEntity.ok(members);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Member> getMemberById(@PathVariable Long id){
        Member member = memberService.getMemberByID( id);
        return ResponseEntity.ok(member);
    }

    @PostMapping()
    public ResponseEntity<Member> createMember(@RequestBody Member member){
        Member newMember = memberService.createMember(member);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMember);

    }

    @PutMapping("/{id}")
    public  ResponseEntity<Member> updateMember(@PathVariable Long id, @RequestBody Member updatedMember){
        Member existing = memberService.getMemberByID(id);
        memberService.updateMember(id,updatedMember);
        return ResponseEntity.ok(existing);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id){
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }

}
