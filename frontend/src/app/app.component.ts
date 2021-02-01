import {Component, OnInit} from '@angular/core';
import {EventService} from './service/event.service';
import {SportService} from './service/sport.service';
import {TeamService} from './service/team.service';
import {Event} from './model/event';
import {Sport} from './model/sport';
import {Team} from './model/team';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend';
  events: Event[] = [];
  sports: Sport[] = [];
  sportNames: string[] = [];
  teams: Team[] = [];
  teamNames: string[] = [];
  sportFilter: '';
  childEvent: Event;

  constructor(private eventService: EventService, private sportService: SportService, private teamService: TeamService) {
  }


  ngOnInit(): void {
    this.getAllSports();
    this.getAllTeams();
    this.getAllEvents();
  }

  public getSportFilter($event): void {
    this.sportFilter = $event;
    this.getEventWithSport(this.sportFilter);
  }

  public getEventFromFormControl($event): void {
    this.childEvent = $event;
    this.putEvent(this.childEvent);
    this.getAllEvents();
  }

  /**
   * Fill event array with events from backend
   */
  public getAllEvents(): void {
    this.events = [];
    this.eventService.getAllEvents().subscribe(value => {
      value.forEach(data => {
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
  }

  /**
   * Fill teams array with teams from backend
   */
  public getAllTeams(): void {
    this.teamService.getAllTeams().subscribe(value => {
      value.forEach(data => {
        this.teams.push(data);
        this.teamNames.push(data.teamName);
      }, error => {
        console.log('Error while retrieving teams');
      });
    });
  }

  /**
   * Fill sports array with teams from backend
   */
  public getAllSports(): void {
    this.sportService.getAllSports().subscribe(value => {
      value.forEach(data => {
        this.sports.push(data);
        this.sportNames.push(data.sportName);
      }, error => {
        console.log('Error while retrieving sports');
      });
    });
  }

  /**
   * Get events by sportName
   * @param sportName input from user
   */
  private getEventWithSport(sportName: string): void {
    this.events = [];
    this.eventService.getBySport(sportName).subscribe(value => {
      value.forEach(data => {
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
    if (this.sportFilter === '') {
      this.getAllEvents();
    }
  }


  /**
   * Send put request to backend
   * @param event Event to be added
   * @private
   */
  private putEvent(event: Event): void {
    this.eventService.putEvent(event).subscribe(value => {
      // Insert additional logic
    });
  }

}
