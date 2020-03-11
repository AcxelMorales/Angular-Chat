import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { WebSocketService } from './web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private wsService: WebSocketService) { }

  sendMessage(message: string): void {
    const payload = {
      from: this.wsService.userService.name,
      body: message
    };

    this.wsService.emit('message', payload);
  }

  getMessages(): Observable<void> {
    return this.wsService.listen('new-message');
  }

  getPrivateMessages(): Observable<void> {
    return this.wsService.listen('private-message');
  }

  getUsersOnline(): Observable<void> {
    return this.wsService.listen('users-online');
  }

}
