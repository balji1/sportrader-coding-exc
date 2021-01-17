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

  /**
   * Form control for event
   */
  eventFormControl = new FormGroup({
    eventName: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    sport: new FormControl('', Validators.required),
    _teamOne: new FormControl('', Validators.required),
    _teamTwo: new FormControl('', Validators.required)
  });

  title = 'frontend';
  events: Event[] = [];
  sports: Sport[] = [];
  sportNames: string[] = [];
  teams: Team[] = [];
  teamNames: string[] = [];
  sportFilter: '';

  /**
   * Typeahead for sport names
   * @param text$
   */
  sportTypeahead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.sportNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  /**
   * Typeahead for team names
   * @param text$
   */
  teamTypeahead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.teamNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );


  constructor(private eventService: EventService, private sportService: SportService, private teamService: TeamService) {
  }


  ngOnInit(): void {
    this.getAllSports();
    this.getAllTeams();
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
  public getEventWithSport(sportName: string): void {
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
   * Get input from form control and execute put
   */
  public submitControl(): void {
    const event: any = {};
    event.eventName = this.eventFormControl.value.eventName;
    event.date = new Date(this.eventFormControl.value.date);
    event._sport = this.getSportByName(this.eventFormControl.value.sport);
    event._teamOne = this.getTeamByName(this.eventFormControl.value._teamOne);
    event._teamTwo = this.getTeamByName(this.eventFormControl.value._teamTwo);
    this.putEvent(event);
    this.getAllEvents();
  }

  /**
   * Prefill form control with hard-coded values | for testing purpose
   */
  public preFillValues(): void {
    this.eventFormControl.patchValue({eventName: 'New Football Event'});
    this.eventFormControl.patchValue({date: '10/10/2020 20:45'});
    this.eventFormControl.patchValue({sport: 'Football'});
    this.eventFormControl.patchValue({_teamOne: 'Sturm'});
    this.eventFormControl.patchValue({_teamTwo: 'Salzburg'});
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


  /**
   * Return team by given team name
   * @param name team name
   * @private
   */
  private getTeamByName(name: string): Team {
    let team: Team;
    this.teams.forEach(value => {
      if (value.teamName === name) {
        team = value;
        return team;
      }
    });
    if (team === undefined) {
      console.log('Could not find team');
    } else {
      return team;
    }
  }

  /**
   * Return sport by given sport name
   * @param name sport name
   * @private
   */
  private getSportByName(name: string): Sport {
    let sport: Sport;
    this.sports.forEach(value => {
      if (value.sportName === name) {
        sport = value;
        return sport;
      }
    });
    if (sport === undefined) {
      console.log('Could not find sport');
    } else {
      return sport;
    }
  }

}
