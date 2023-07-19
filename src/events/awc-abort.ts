type AWCAbortEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-abort': AWCAbortEvent;
  }
}

export default AWCAbortEvent;
