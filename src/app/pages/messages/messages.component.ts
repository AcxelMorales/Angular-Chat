import { Component, OnInit } from '@angular/core';

import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {

  public name: string;

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.name = this.webSocketService.userService.name;
  }

}
