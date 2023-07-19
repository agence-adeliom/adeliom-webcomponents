type AWCShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-show': AWCShowEvent;
  }
}

export default AWCShowEvent;
