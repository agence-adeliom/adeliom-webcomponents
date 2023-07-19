type AWCInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-initial-focus': AWCInitialFocusEvent;
  }
}

export default AWCInitialFocusEvent;
