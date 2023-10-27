export type AWCResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-resize': AWCResizeEvent;
  }
}
