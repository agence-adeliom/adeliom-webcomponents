export type AWCCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-copy': AWCCopyEvent;
  }
}
