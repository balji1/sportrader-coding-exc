package com.sportcalender.service;

import com.sportcalender.model.Event;
import com.sportcalender.model.Sport;
import com.sportcalender.repository.EventRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Transactional
    public Event getEventById(final Long id) {
        return eventRepository.findById(id).orElseThrow(() -> {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "could not find event: " + id);
        });
    }

    @Transactional
    public void addEvent(final Event event) {
        eventRepository.save(event);
    }

    @Transactional
    public List<Event> getAllEvents(){
        return eventRepository.findAll();
    }

    @Transactional
    public void deleteEventById(final Long id){
        eventRepository.deleteById(id);
    }

    @Transactional
    public List<Event> getAllBySport(Sport sport){
        return eventRepository.findAllBy_sport(sport);
    }


}
