import Centrifuge from 'centrifuge';
import SockJS from 'sockjs-client';
import { ICentrifuge } from './ICentrifuge';

export class CentrifugeUtils {
  private static _instance: CentrifugeUtils = new CentrifugeUtils();
  readonly centrifuge: ICentrifuge;

  private constructor() {
    if (CentrifugeUtils._instance) {
      throw new Error('Error - use Singleton.getInstance()');
    }

    this.centrifuge = new Centrifuge('https://centrifuge.example.com/connection/sockjs', {
      sockjs: SockJS
    });
  }

  static get instance(): CentrifugeUtils {
    return CentrifugeUtils._instance;
  }
}
