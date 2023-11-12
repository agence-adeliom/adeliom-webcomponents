import AWCFileUpload from './file-upload.component.js';

export * from './file-upload.component.js';
export default AWCFileUpload;

AWCFileUpload.define('awc-file-upload');

declare global {
  interface HTMLElementTagNameMap {
    'awc-file-upload': AWCFileUpload;
  }
}
