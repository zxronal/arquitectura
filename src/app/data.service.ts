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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };
    const body = new HttpParams()
      .set('action', action);
    // 192.168.1.70
    const url = 'http://' + ip + ':8080/action';
    this.httpClient.post(url, body.toString(), httpOptions ).
    subscribe((res: Response) => console.log(res));
  }

  movHead(angle: string, ip: string) {
    // 0
    // 90
    // 180
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
      })
    };
    const body = new HttpParams()
      .set('angle', angle);
    // 192.168.1.70
    const url = 'http://' + ip + ':8080/mov_head';
    this.httpClient.post(url, body.toString(), httpOptions ).
    subscribe((res: Response) => console.log(res));
  }
}
