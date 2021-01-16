import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const SERVER_URL = environment.serverUrl;
const SPORT_URL = environment.sportUrl;

@Injectable({
  providedIn: 'root'
})
export class SportService {

  constructor(private http: HttpClient) {
  }

  getAllSports(): Observable<any> {
    return this.http.get(SERVER_URL + SPORT_URL + '/all');
  }

}
