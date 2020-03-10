import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

import User from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public socketStatus: boolean = false;
  private user: User = null;

  constructor(private socket: Socket) {
    this.loadLocalStorage();
    this.checkSocket();
  }

  get userService(): User {
    return this.user;
  }

  checkSocket(): void {
    this.socket.on('connect', () => {
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      this.socketStatus = false;
    });
  }

  emit(evt: string, payload?: any, callback?: Function): void {
    this.socket.emit(evt, payload, callback);
  }

  listen(evt: string): Observable<void> {
    return this.socket.fromEvent(evt);
  }

  loginWS(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.emit('user-config', { name },  (resp) => {
        this.user = new User(name);
        this.saveLocalStorage();

        resolve();
      });
    });
  }

  loadLocalStorage(): void {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.loginWS(this.user.name);
    }
  }

  saveLocalStorage(): void {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

}
