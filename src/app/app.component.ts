import { Component } from '@angular/core';

import { WebSocketService } from './services/web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  constructor(public weSocketService: WebSocketService) { }

}
