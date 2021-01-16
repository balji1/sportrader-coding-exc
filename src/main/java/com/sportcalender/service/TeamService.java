package com.sportcalender.service;

import com.sportcalender.model.Sport;
import com.sportcalender.model.Team;
import com.sportcalender.repository.TeamRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Transactional
    public List<Team> getAllTeams(){
        return teamRepository.findAll();
    }
}
