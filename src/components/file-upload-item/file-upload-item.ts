import AWCFileUploadItem from './file-upload-item.component.js';

export * from './file-upload-item.component.js';
export default AWCFileUploadItem;

AWCFileUploadItem.define('awc-file-upload-item');

declare global {
  interface HTMLElementTagNameMap {
    'awc-file-upload-item': AWCFileUploadItem;
  }
}
