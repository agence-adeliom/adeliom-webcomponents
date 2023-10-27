export type AWCRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-remove': AWCRemoveEvent;
  }
}
