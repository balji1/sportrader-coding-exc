import {Team} from './team';
import {Sport} from './sport';

export interface Event {
  eventId: number;
  eventName: string;
  date: Date;
  _sport: Sport;
  _teamOne: Team;
  _teamTwo: Team;
}
