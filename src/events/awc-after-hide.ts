export type AWCAfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-after-hide': AWCAfterHideEvent;
  }
}
