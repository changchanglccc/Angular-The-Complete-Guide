import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Mimi';

  serverCreated = true;

  onResetUserName(): void {
    this.userName = '';
    this.serverCreated = false;
  }
}
