import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { WebSocketService } from '../services/web-socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private webSocketService: WebSocketService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.webSocketService.userService === null) {
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

}
