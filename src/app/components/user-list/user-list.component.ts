import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  $usersOnline: Observable<any>;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.$usersOnline = this.chatService.getUsersOnline();
  }

}
