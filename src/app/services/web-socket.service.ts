import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus: boolean = false;

  constructor(private socket: Socket) {
    this.checkSocket();
  }

  checkSocket(): void {
    this.socket.on('connect', () => {
      console.log('Connected to the server');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected to the server');
      this.socketStatus = false;
    });
  }

  emit(evt: string, payload?: any, callback?: Function): void {
    this.socket.emit(evt, payload, callback);
  }

  listen(evt: string): Observable<void> {
    return this.socket.fromEvent(evt);
  }

}
