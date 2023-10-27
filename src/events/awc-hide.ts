export type AWCHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-hide': AWCHideEvent;
  }
}
