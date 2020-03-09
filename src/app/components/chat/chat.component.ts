import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit, OnDestroy {

  text: string = '';
  chatSubscription: Subscription = new Subscription();
  messages: any[] = [];
  element: HTMLElement;
  form: FormGroup;

  constructor(private chatService: ChatService) {
    this.form = new FormGroup({
      text: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.element = document.getElementById('chat');

    this.chatSubscription = this.chatService.getMessages().subscribe(msg => {
      this.messages.push(msg);
      setTimeout(() => this.element.scrollTop = this.element.scrollHeight, 50);
    });
  }

  send(): void {
    if (this.form.invalid) return;
    this.chatService.sendMessage(this.form.value.text);
    this.form.reset();
  }

  ngOnDestroy(): void {
    this.chatSubscription.unsubscribe();
  }

}
