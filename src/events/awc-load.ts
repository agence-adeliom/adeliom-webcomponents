type AWCLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-load': AWCLoadEvent;
  }
}

export default AWCLoadEvent;
