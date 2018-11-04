import Centrifuge from 'centrifuge';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  result: any;

  constructor() {
    const sock = new Centrifuge('ws://localhost:8000/connection/websocket');
    sock.setToken('');
    sock.connect();
    sock.on('connect', function (e) {
      console.log('websocekt connected!');
    });

    const subscription = sock.subscribe('terminal', ({data}) => {
      if (data.forServer) {

      }
      if (data.forClient) {
        this.result = data.name;
      }
      console.log(data);
    });

    subscription.publish({forClient: true, name: 'ofir1'});


    // sock.send(JSON.stringify({ name: 'aaa'}) );
  }

}
