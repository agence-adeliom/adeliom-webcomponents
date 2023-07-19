type AWCStartEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-start': AWCStartEvent;
  }
}

export default AWCStartEvent;
