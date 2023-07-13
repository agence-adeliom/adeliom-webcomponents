type AWCCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-cancel': AWCCancelEvent;
  }
}

export default AWCCancelEvent;
