import {Team} from './team';
import {Sport} from './sport';

export interface Event {
  eventId: number;
  eventName: string;
  date: Date;
  sport: Sport;
  _teamOne: Team;
  _teamTwo: Team;
}
