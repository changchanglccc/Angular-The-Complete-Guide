import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  serverStatus = 'offline';
  isDisplayable = true;

  details: Array<string> = [];
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {}

  addDetail(): void {
    this.isDisplayable = !this.isDisplayable;
    this.details.push('secret pwd added!');
  }
}
