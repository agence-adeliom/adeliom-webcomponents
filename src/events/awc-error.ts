type AWCErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-error': AWCErrorEvent;
  }
}

export default AWCErrorEvent;
