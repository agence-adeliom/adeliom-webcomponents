type AWCAfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-after-show': AWCAfterShowEvent;
  }
}

export default AWCAfterShowEvent;
