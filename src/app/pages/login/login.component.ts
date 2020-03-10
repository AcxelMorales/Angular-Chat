import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { WebSocketService } from '../../services/web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private webSocketService: WebSocketService,
    private router: Router
  ) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  login(): void {
    this.webSocketService.loginWS(this.form.value.name)
      .then(() => this.router.navigate(['/messages']));
  }

}
