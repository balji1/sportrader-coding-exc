import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const SERVER_URL = environment.serverUrl;
const TEAM_URL = environment.sportUrl;

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {
  }

  getAllTeams(): Observable<any> {
    return this.http.get(SERVER_URL + TEAM_URL + 'all');
  }

}
