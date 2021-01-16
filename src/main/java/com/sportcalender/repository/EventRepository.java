package com.sportcalender.repository;

import com.sportcalender.model.Event;
import com.sportcalender.model.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    @Override
    Optional<Event> findById(Long aLong);
    List<Event> getAllBySport(Sport sport);
    List<Event> findAllBySport(Sport sport);
}
