import AWCTreeItem from './tree-item.component.js';

export * from './tree-item.component.js';
export default AWCTreeItem;

AWCTreeItem.define('awc-tree-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tree-item': AWCTreeItem;
  }
}
