export type AWCFinishEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-finish': AWCFinishEvent;
  }
}
