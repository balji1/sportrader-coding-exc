import {Component} from '@angular/core';
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
  event: Event = new class implements Event {
    date: Date;
    eventId: number;
    eventName: string;
    sport: Sport;
    teamOne: Team;
    teamTwo: Team;
  };

  constructor(private eventService: EventService, private sportService: SportService, private teamService: TeamService) {
  }

  public getAllEvents() {
    this.reset();
    this.eventService.getAllEvents().subscribe(value => {
      value.forEach(data => {
        console.log(data);
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
  }

  public getAllTeams() {
    this.reset();
    this.teamService.getAllTeams().subscribe(value => {
      value.forEach(data => {
        this.teams.push(data);
      }, error => {
        console.log('Error while retrieving teams');
      });
    });
  }

  public getAllSports() {
    this.reset();
    this.sportService.getAllSports().subscribe(value => {
      value.forEach(data => {
        this.sports.push(data);
      }, error => {
        console.log('Error while retrieving sports');
      });
    });
  }

  public addEvent() {
    let team1: Team;
    let team2: Team;
    let sport: Sport;
    this.event.eventName = 'FrontendEvent';
    this.event.date = new Date();
    this.event.sport = sport;
    this.event.teamOne = team1;
    this.event.teamTwo = team2;

    this.eventService.putEvent(this.event).subscribe(value => {
      console.log(value);
    });
  }

  public getEventWithSport(sportName: string) {
    this.reset();
    this.eventService.getBySport(sportName).subscribe(value => {
      value.forEach(data => {
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
  }

  private reset() {
    this.events = [];
    this.teams = [];
    this.sports = [];
  }

}
