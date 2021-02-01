import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Event} from '../../model/event';
import {Team} from '../../model/team';
import {Sport} from '../../model/sport';

@Component({
  selector: 'app-event-form-control',
  templateUrl: './event-form-control.component.html',
  styleUrls: ['./event-form-control.component.css']
})
export class EventFormControlComponent implements OnInit {

  eventFormControl = new FormGroup({
    eventName: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    sport: new FormControl('', Validators.required),
    _teamOne: new FormControl('', Validators.required),
    _teamTwo: new FormControl('', Validators.required)
  });
  @Input() teamNames: string[] = [];
  @Input() sportNames: string[] = [];
  @Input() sports: Sport[] = [];
  @Input() teams: Team[] = [];
  @Output() eventOutput = new EventEmitter<Event>();

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

  constructor() {
  }

  ngOnInit(): void {
  }

  public submitControl(): void {
    const event: any = {};
    event.eventName = this.eventFormControl.value.eventName;
    event.date = new Date(this.eventFormControl.value.date);
    event._sport = this.getSportByName(this.eventFormControl.value.sport);
    event._teamOne = this.getTeamByName(this.eventFormControl.value._teamOne);
    event._teamTwo = this.getTeamByName(this.eventFormControl.value._teamTwo);
    this.eventOutput.emit(event);
    // this.getAllEvents();
  }

  public preFillValues(): void {
    this.eventFormControl.patchValue({eventName: 'New Football Event'});
    this.eventFormControl.patchValue({date: '10/10/2020 20:45'});
    this.eventFormControl.patchValue({sport: 'Football'});
    this.eventFormControl.patchValue({_teamOne: 'Sturm'});
    this.eventFormControl.patchValue({_teamTwo: 'Salzburg'});
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
