type AWCBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-blur': AWCBlurEvent;
  }
}

export default AWCBlurEvent;
