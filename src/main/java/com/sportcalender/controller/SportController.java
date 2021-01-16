package com.sportcalender.controller;

import com.sportcalender.model.Sport;
import com.sportcalender.service.SportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/sport")
public class SportController {
    private final SportService sportService;

    public SportController(SportService sportService) {
        this.sportService = sportService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Sport>> getAllSportTypes(){
        return ResponseEntity.ok(sportService.getAllSportTypes());
    }
}
