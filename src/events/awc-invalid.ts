export type AWCInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-invalid': AWCInvalidEvent;
  }
}
