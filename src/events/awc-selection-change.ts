import type AWCTreeItem from '../components/tree-item/tree-item.js';

export type AWCSelectionChangeEvent = CustomEvent<{ selection: AWCTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-selection-change': AWCSelectionChangeEvent;
  }
}
