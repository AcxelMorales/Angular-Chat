import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    MessagesComponent
  ]
})
export class PagesModule { }
