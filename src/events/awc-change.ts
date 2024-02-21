export type AWCChangeEvent = CustomEvent<Record<PropertyKey, unknown>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-change': AWCChangeEvent;
  }
}
