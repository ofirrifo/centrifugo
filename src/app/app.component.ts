import { Component } from '@angular/core';
import Centrifuge from 'centrifuge';
import SockJS from 'sockjs-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const centrifuge = new Centrifuge('https://centrifuge.example.com/connection/sockjs', {
      sockjs: SockJS
    });

  }

}
