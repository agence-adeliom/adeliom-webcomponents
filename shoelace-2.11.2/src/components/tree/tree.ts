import AWCTree from './tree.component.js';

export * from './tree.component.js';
export default AWCTree;

AWCTree.define('awc-tree');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tree': AWCTree;
  }
}
