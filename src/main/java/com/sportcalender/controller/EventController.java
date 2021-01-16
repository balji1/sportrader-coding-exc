package com.sportcalender.controller;

import com.sportcalender.model.Event;
import com.sportcalender.model.Sport;
import com.sportcalender.service.EventService;
import com.sportcalender.service.SportService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/event")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EventController {

    private final EventService eventService;
    private final SportService sportService;

    public EventController(EventService eventService, SportService sportService) {
        this.eventService = eventService;
        this.sportService = sportService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Event>> getAllEvents() {
        return ResponseEntity.ok(eventService.getAllEvents());
    }

    @DeleteMapping(path = "/{event_id}")
    public ResponseEntity<String> deleteEventById(@PathVariable final Long event_id) {
        eventService.deleteEventById(event_id);
        return ResponseEntity.ok("Event has been remove");
    }

    @GetMapping("/sport")
    public ResponseEntity<List<Event>> getEventsBySport(@RequestParam("name") final String sportName) {
        Sport sport = sportService.getByName(sportName);
        return ResponseEntity.ok(eventService.getAllBySport(sport));
    }

    @PostMapping("/add")
    public ResponseEntity<String> addEvent(@RequestBody Event event){
        eventService.addEvent(event);
        return ResponseEntity.ok("Event has been added");
    }
}
