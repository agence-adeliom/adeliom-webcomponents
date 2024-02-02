export type AWCDropEvent = CustomEvent<Record<PropertyKey, unknown>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-drop': AWCDropEvent;
  }
}
