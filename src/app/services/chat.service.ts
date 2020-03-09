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
      from: 'Acxel',
      body: message
    };

    this.wsService.emit('message', payload);
  }

  getMessages(): Observable<void> {
    return this.wsService.listen('new-message');
  }

}
