import {Sport} from './sport';

export interface Team {
  teamId: number;
  teamName: string;
  _sport: Sport;
}
