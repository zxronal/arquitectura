import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  actionToDo(action: string, ip: string) {
    // forward
    // aback
    // stop
    // spinforward
    // spinaback
    const body = new HttpParams()
      .set('action', action);
    const url = 'http://' + ip + ':8080/action';
    return this.httpClient.post(url, body.toString(), {responseType: 'text'} );
  }

  movHead(angle: string, ip: string) {
    // 0
    // 90
    // 180
    /*
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      }),
      responseType: 'text',
    };*/
    const body = new HttpParams()
      .set('angle', angle);
    // 192.168.1.70
    const url = 'http://' + ip + ':8080/mov_head';
    return this.httpClient.post(url, body.toString(), {responseType: 'text'} );
  }

  playSound(ip: string) {
    const body = new HttpParams()
      .set('action', 'play');
    const url = 'http://' + ip + ':8080/play_sound';
    return this.httpClient.post(url, body.toString(), {responseType: 'text'} );
  }
}
