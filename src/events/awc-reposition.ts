export type AWCRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-reposition': AWCRepositionEvent;
  }
}
