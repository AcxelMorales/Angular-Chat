import { Component } from '@angular/core';

import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {

  constructor(public webSocketService: WebSocketService) { }

}
