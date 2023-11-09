export type AWCPageChange = CustomEvent<{ value: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-page-change': AWCPageChange;
  }
}
