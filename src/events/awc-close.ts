type AWCCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-close': AWCCloseEvent;
  }
}

export default AWCCloseEvent;
