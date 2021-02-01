import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../model/event';

@Component({
  selector: 'app-eventcard',
  templateUrl: './eventcard.component.html',
  styleUrls: ['./eventcard.component.css']
})
export class EventcardComponent implements OnInit {

  @Input() events: Event[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
