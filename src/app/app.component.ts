import { Component } from '@angular/core';
import { CentrifugeUtils } from './utils/centrifuge-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const terminalSubscription = CentrifugeUtils.instance.centrifuge.subscribe('terminal', (message) => {
      console.log(message);
    });

    terminalSubscription.on();
  }

}
