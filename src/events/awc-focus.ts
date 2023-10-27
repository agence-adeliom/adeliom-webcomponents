export type AWCFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-focus': AWCFocusEvent;
  }
}


