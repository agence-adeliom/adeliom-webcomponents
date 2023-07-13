type AWCTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-tab-show': AWCTabShowEvent;
  }
}

export default AWCTabShowEvent;
