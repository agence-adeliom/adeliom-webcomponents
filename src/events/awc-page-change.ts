export type AWCPageChange = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-page-change': AWCPageChange;
  }
}
