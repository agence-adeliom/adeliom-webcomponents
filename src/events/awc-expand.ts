type AWCExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-expand': AWCExpandEvent;
  }
}

export default AWCExpandEvent;
