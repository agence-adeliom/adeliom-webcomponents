export type AWCCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-collapse': AWCCollapseEvent;
  }
}


