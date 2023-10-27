import type AWCMenuItem from '../components/menu-item/menu-item';

export type AWCSelectEvent = CustomEvent<{ item: AWCMenuItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-select': AWCSelectEvent;
  }
}


