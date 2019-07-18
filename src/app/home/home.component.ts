import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ip: string;
  disabled = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.ip = '192.168.43.99';
  }

  showAlert() {
    this.disabled = true;
    alert('No se permite hacer dos movimientos a la vez, por favor espere.');
  }

  sendAction(action: string) {
    this.showAlert();
    this.dataService.actionToDo(action, this.ip).subscribe(
      res => {
        this.disabled = false;
      });
  }

  movHead(angle: string) {
    this.showAlert();
    this.dataService.movHead(angle, this.ip).subscribe(
      res => {
        this.disabled = false;
      });
  }

  playSound() {
    this.showAlert();
    this.dataService.playSound(this.ip).subscribe(
      res => {
        this.disabled = false;
      });
  }
}
