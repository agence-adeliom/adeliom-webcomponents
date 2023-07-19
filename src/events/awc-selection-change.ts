import type AWCTreeItem from '../components/tree-item/tree-item';

type AWCSelectionChangeEvent = CustomEvent<{ selection: AWCTreeItem[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-selection-change': AWCSelectionChangeEvent;
  }
}

export default AWCSelectionChangeEvent;
