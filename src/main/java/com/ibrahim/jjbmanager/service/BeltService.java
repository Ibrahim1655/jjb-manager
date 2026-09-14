package com.ibrahim.jjbmanager.service;

import com.ibrahim.jjbmanager.entity.Belt;
import com.ibrahim.jjbmanager.repository.BeltRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class BeltService {
     private final BeltRepository beltRepository;

    public List<Belt> getAllBelts(){
        List<Belt> belts = beltRepository.findAll();
        return belts;
    }
}
