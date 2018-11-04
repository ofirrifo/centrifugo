import Centrifuge from 'centrifuge';
import SockJS from 'sockjs-client';
import { ICentrifuge } from './ICentrifuge';

export class CentrifugeUtils {
  private static _instance: CentrifugeUtils = new CentrifugeUtils();
  readonly centrifuge: ICentrifuge | any;

  private constructor() {
    if (CentrifugeUtils._instance) {
      throw new Error('Error - use Singleton.getInstance()');
    }

    this.centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket');
    this.centrifuge.setToken('');
    this.centrifuge.connect();
  }

  static get instance(): CentrifugeUtils {
    return CentrifugeUtils._instance;
  }
}
