type AWCInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-input': AWCInputEvent;
  }
}

export default AWCInputEvent;
