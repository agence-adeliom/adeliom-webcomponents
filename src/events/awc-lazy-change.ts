export type AWCLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-lazy-change': AWCLazyChangeEvent;
  }
}
