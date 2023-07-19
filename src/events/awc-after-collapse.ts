type AWCAfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-after-collapse': AWCAfterCollapseEvent;
  }
}

export default AWCAfterCollapseEvent;
