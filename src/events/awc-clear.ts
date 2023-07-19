type AWCClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-clear': AWCClearEvent;
  }
}

export default AWCClearEvent;
