export type AWCRemoveEvent = CustomEvent<Record<PropertyKey, unknown>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-remove': AWCRemoveEvent;
  }
}
