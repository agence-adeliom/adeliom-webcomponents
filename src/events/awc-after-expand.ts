export type AWCAfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-after-expand': AWCAfterExpandEvent;
  }
}
