export type AWCLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-lazy-load': AWCLazyLoadEvent;
  }
}
