export type AWCRequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-request-close': AWCRequestCloseEvent;
  }
}
