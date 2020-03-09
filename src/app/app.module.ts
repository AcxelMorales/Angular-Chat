import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { ChatComponent } from './components/chat/chat.component';

const config: SocketIoConfig = { url: environment.webSocketUrl, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
