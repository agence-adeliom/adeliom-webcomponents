export type AWCMapEvent = CustomEvent<Record<PropertyKey, unknown> | L.LeafletEvent>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-map': AWCMapEvent;
  }
}
