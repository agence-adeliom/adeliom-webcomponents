import AWCSplitPanel from './split-panel.component.js';

export * from './split-panel.component.js';
export default AWCSplitPanel;

AWCSplitPanel.define('awc-split-panel');

declare global {
  interface HTMLElementTagNameMap {
    'awc-split-panel': AWCSplitPanel;
  }
}
