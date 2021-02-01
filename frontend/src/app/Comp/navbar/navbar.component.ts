import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() emmitSportFilter = new EventEmitter<string>();
  @Input() sportArr: string[] = [];
  sportFilter = '';
  sportNames: string[] = [];
  sportTypeahead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.sportArr.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  constructor() {
  }

  ngOnInit(): void {
  }

  public emmitFilter(): void {
    this.emmitSportFilter.emit(this.sportFilter);
  }


}
