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
  sportFilter: '';
  sportTypeahead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.sportNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  constructor(private eventService: EventService, private sportService: SportService, private teamService: TeamService) {
  }


  ngOnInit(): void {
    this.getAllSports();
    this.getAllTeams();
  }

  public getAllEvents(): void {
    this.events = [];
    this.eventService.getAllEvents().subscribe(value => {
      value.forEach(data => {
        console.log(data);
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
  }

  public getAllTeams(): void {
    this.teamService.getAllTeams().subscribe(value => {
      value.forEach(data => {
        this.teams.push(data);
      }, error => {
        console.log('Error while retrieving teams');
      });
    });
  }

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

  public getEventWithSport(sportName: string) {
    this.events = [];
    this.eventService.getBySport(sportName).subscribe(value => {
      value.forEach(data => {
        this.events.push(data);
      }, error => {
        console.log('Error while retrieving events');
      });
    });
  }

  public submitControl(): void {
    const event: any = {};
    event.eventName = this.eventFormControl.value.eventName;
    event.date = this.eventFormControl.value.date;
    event.sport = this.eventFormControl.value.sport;
    event._teamOne = this.eventFormControl.value._teamOne;
    event._teamTwo = this.eventFormControl.value._teamTwo;
    console.log(event);
  }

  // public addEvent() {
  //   let team1: Team;
  //   let team2: Team;
  //   let sport: Sport;
  //   this.event.eventName = 'FrontendEvent';
  //   this.event.date = new Date();
  //   this.event.sport = sport;
  //   this.event.teamOne = team1;
  //   this.event.teamTwo = team2;
  //
  //   this.eventService.putEvent(this.event).subscribe(value => {
  //     console.log(value);
  //   });
  // }
  // private getTeamByName(name: string){
  //   return this.teams.forEach(value => return val)
  // }

}
