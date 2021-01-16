package com.sportcalender.service;

import com.sportcalender.model.Event;
import com.sportcalender.model.Sport;
import com.sportcalender.repository.SportRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SportService {
    private final SportRepository sportRepository;

    public SportService(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    @Transactional
    public List<Sport> getAllSportTypes(){
        return sportRepository.findAll();
    }

    @Transactional
    public Sport getByName(final String name){
        return sportRepository.findBySportName(name);
    }
}
