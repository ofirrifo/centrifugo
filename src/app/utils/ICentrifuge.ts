export interface ICentrifuge {
  subscribe(channel: string, events: Function): any;

  isConnected(): boolean;

  connect(): void;

  disconnect(): void;

  ping(): any;

  // start collecting messages without sending them to Centrifuge until flush
  // method called
  startBatching(): void;

  stopBatching(): void;

  // start collecting private channels to create bulk authentication
  // request to subscribeEndpoint when stopSubscribeBatching will be called
  startSubscribeBatching(): void;

  // create request to subscribeEndpoint with collected private channels
  // to ask if this client can subscribe on each channel
  stopSubscribeBatching(): void;
}
