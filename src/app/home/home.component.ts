import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ip: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ip = '192.168.43.99';
  }

  sendAction(action: string) {
    this.dataService.actionToDo(action, this.ip);
  }
}
