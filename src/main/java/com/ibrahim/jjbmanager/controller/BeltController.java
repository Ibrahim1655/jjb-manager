package com.ibrahim.jjbmanager.controller;

import com.ibrahim.jjbmanager.entity.Belt;
import com.ibrahim.jjbmanager.service.BeltService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/belts")
@RequiredArgsConstructor
public class BeltController {
    private final BeltService beltService;

    @GetMapping()
    public ResponseEntity<List<Belt>> getALlBelts(){
        List<Belt> belts = beltService.getAllBelts();
        return ResponseEntity.ok(belts);
    }
}
