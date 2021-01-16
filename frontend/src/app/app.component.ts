import { Component } from '@angular/core';
import {EventService} from './service/event.service';
import {SportService} from './service/sport.service';
import {TeamService} from './service/team.service';
import {Event} from './model/event';
import {Sport} from './model/sport';
import {Team} from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  events: Event[] = [];
  sports: Sport[] = [];
  teams: Team[] = [];

  constructor(private eventService: EventService, private sportService: SportService, private teamService: TeamService) {
  }

  public getAllEvents() {
    this.eventService.getAllEvents().subscribe(value => {
      value.forEach(data => {
        this.events.push(data);
      }, console.log('Error while retrieving events'));
    });
  }

  public getAllTeams() {
    this.teamService.getAllTeams().subscribe(value => {
      value.forEach(data => {
        this.teams.push(data);
      }, console.log('Error while retrieving teams'));
    });
  }

  public getAllSports() {
    this.sportService.getAllSports().subscribe(value => {
      value.forEach(data => {
        this.sports.push(data);
      }, console.log('Error while retrieving sports'));
    });
  }

}
