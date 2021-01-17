import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Event} from '../model/event';

const SERVER_URL = environment.serverUrl;
const EVENT_URL = environment.eventUrl;

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  getAllEvents(): Observable<any> {
    return this.http.get(SERVER_URL + EVENT_URL + '/all');
  }

  getBySport(sportName: string): Observable<any> {
    return this.http.get(SERVER_URL + EVENT_URL + '/sport?name=' + sportName);
  }

  putEvent(event: Event): Observable<any> {
    return this.http.post<string>(SERVER_URL + EVENT_URL + '/add', event, {responseType: 'text' as 'json'});
  }

}
