import AWCTabPanel from './tab-panel.component.js';

export * from './tab-panel.component.js';
export default AWCTabPanel;

AWCTabPanel.define('awc-tab-panel');

declare global {
  interface HTMLElementTagNameMap {
    'awc-tab-panel': AWCTabPanel;
  }
}
