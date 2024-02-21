import { classMap } from 'lit/directives/class-map.js';
import { FormControlController } from '../../internal/form.js';
import { HasSlotController } from '../../internal/slot.js';
import { hasValidFileSize, hasValidFileType } from './library.js';
import { html, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize.js';
import { property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import AWCFileUploadItem from '../file-upload-item/file-upload-item.component.js';
import AWCIcon from '../icon/icon.component.js';
import styles from './file-upload.styles.js';
import type { AWCFormControl } from '../../internal/awc-element.js';
import type { AWCHideEvent } from '../../events/awc-hide.js';
import type { CSSResultGroup } from 'lit';
import type { FileInfo } from './library.js';

/**
 * @summary File Upload provides an area where files can be dragged and dropped onto from the Operating System to be uploaded or to be used for other tasks. It also provides a button to open a file dialog and select files from the file system. Per default the File Dropzone shows a list of all selected files below the dropzone.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-file-upload--documentation
 * @status experimental
 * @since 1.0
 *
 * @dependency awc-icon
 * @dependency awc-file-upload-item
 *
 * @slot content - The dropzone's content. Alternatively, you can use the image slot and label prop.
 * @slot image - The dropzone's image.
 * @slot button - The dropzone's button.
 * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.
 *
 * @event awc-drop - Emitted when dragged files have been dropped on the dropzone area.
 * @event awc-select - Emitted when files have been selected via the file dialog.
 * @event {{ fileList: FileList }} awc-change - Emitted when files have been uploaded via the dropzone or file dialog.
 * @event {{ response: unknown }} awc-load - Emitted when a file transfer was finished
 * @event {{ event: ProgressEvent }} awc-error - Emitted when a file transfer threw an error
 * @event {{ event: ProgressEvent }} awc-abort - Emitted when a file transfer was aborted by the user
 * @event {{ file: FileInfo }} awc-remove - Emitted when a file was removed
 *
 * @csspart base - The component's internal wrapper.
 * @csspart content - The dropzone container.
 * @csspart image - The dropzone image.
 * @csspart button - The dropzone button.
 * @csspart help-text - The help text's wrapper.
 *
 * @cssproperty [--border-radius=var(--awc-border-radius-medium)] --border-radius - The border radius of the dropzone borders.
 * @cssproperty [--border-width=var(--awc-input-border-width)] --border-width - The width of the dropzone borders.
 * @cssproperty [--border-style=solid] --border-style - The style of the dropzone borders.
 * @cssproperty [--list-border-style=solid] --list-border-style - The style of the file list borders.
 */
export default class AWCFileUpload extends AWCElement implements AWCFormControl {
  static styles: CSSResultGroup = styles;
  static dependencies = { 'awc-icon': AWCIcon, 'awc-file-upload-item': AWCFileUploadItem };
  private readonly hasSlotController = new HasSlotController(this, 'help-text', 'content');

  protected readonly formControlController = new FormControlController(this, {
    value: (control: AWCFileUpload) => {
      if (control.files.length === 1) {
        return control.files[0].file;
      } else if (control.files.length > 1) {
        return control.files.map(fileInfo => fileInfo.file);
      }
      return new File([''], '', { type: 'application/octet-stream' });
    },
    assumeInteractionOn: ['awc-blur', 'awc-input']
  });

  private readonly localize = new LocalizeController(this);

  /** Internal property to show an error in the dropzone */
  @state() error?: string;

  /** Indicates whether a file is currently dragged over the dropzone */
  @state() isDragover = false;

  @query('#file-input') input: HTMLInputElement;

  @property() files: FileInfo[] = [];

  /** The input's name attribute. */
  @property() name: string;

  public get value(): string | File {
    if (this.files.length > 0) {
      return `C:\\fakepath\\${this.files[0].file.name}`;
    }
    return '';
  }

  public set value(file: string | File) {
    if (file instanceof File) {
      this.files = [{ file }];
      return;
    }
    this.files = [];
  }

  /** Disables the dropzone. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** If true, hides button to open the native file selection dialog */
  @property({ type: Boolean, reflect: true, attribute: 'no-button' }) noButton = false;

  /** If true, shows only a button as a file input */
  @property({ type: Boolean, reflect: true, attribute: 'button-only' }) buttonOnly = false;

  /** If true, no file list will be shown */
  @property({ type: Boolean, reflect: true, attribute: 'no-file-list' }) noFileList = false;

  /** An optional overwrite for the upload label */
  @property() label?: string;

  /** An optional overwrite for the preview button label */
  @property({ attribute: 'button-label' }) buttonLabel?: string;

  /** The locale to render the component in. */
  @property() lang: string;

  /** A string that defines the file types the file dropzone should accept. Defaults to '*' */
  @property({ type: String, reflect: true }) accept = '*';

  /** An optional maximum size of a file that will be considered valid. */
  @property({ type: Number, attribute: 'max-file-size' }) maxFileSize?: number;

  /** The maximum amount of files that are allowed. */
  @property({ type: Number, attribute: 'max-files' }) maxFiles: number;

  /** Indicates if multiple files can be uploaded */
  @property({ type: Boolean, reflect: true }) multiple = false;

  /** The input's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  private addFile(file: File) {
    if (this.maxFiles && this.files.length >= this.maxFiles) {
      this.error = this.localize.term('maxFiles');
      return;
    }

    const fileInfo: FileInfo = {
      file
    };

    if (!hasValidFileType(file, this.accept)) {
      fileInfo.accepted = false;
      fileInfo.error = this.localize.term('fileTypeNotAccepted', this.accept);
    } else if (this.maxFileSize && !hasValidFileSize(file, this.maxFileSize)) {
      fileInfo.accepted = false;
      fileInfo.error = this.localize.term('fileSizeExceeded', this.maxFileSize);
    } else {
      fileInfo.accepted = true;
    }
    fileInfo.accepted = true;
    this.files = this.multiple ? [...this.files, fileInfo] : [fileInfo];

    this.emit('awc-change', { detail: { files: this.files } });
  }

  private handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) {
      return;
    }

    this.error = undefined;
    if (!this.multiple && fileList.length > 1) {
      this.error = this.localize.term('noMultipleFiles');
      return;
    }

    Object.values(fileList).forEach(file => this.addFile(file));
  }

  private onDragLeave(): void {
    this.isDragover = false;
  }

  private onDragOver(event: DragEvent): void {
    event.preventDefault();

    if (!event.dataTransfer) {
      // Abort if no files are dragged
      return;
    }

    this.isDragover = true;
  }

  private onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragover = false;

    const files = event.dataTransfer?.files;
    if (!files || this.disabled) {
      // Abort if no files were transferred, the entire element or drag and drop is disabled
      return;
    }
    this.emit('awc-drop', { detail: { files: files } });
    this.handleFiles(files);
  }

  private handleBrowseFileClick() {
    this.input.click();
  }

  private handleFileInputChange() {
    this.handleFiles(this.input.files);
  }

  private handleFileRemove(index: number) {
    const fileInfo = this.files[index];
    this.emit('awc-remove', { detail: { file: fileInfo } });
    this.files = this.files.filter((_, fileIndex) => fileIndex !== index);
  }

  private handleInvalid(event: Event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }

  firstUpdated() {
    this.formControlController.updateValidity();
  }

  /** Gets the associated form, if one exists. */
  getForm(): HTMLFormElement | null {
    return this.formControlController.getForm();
  }

  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }

  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }

  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }

  get dragDroplabel(): string {
    if (this.error) {
      return this.error;
    }
    return this.label ? this.label : this.localize.term('dragDrop');
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.formControlController.setValidity(this.disabled);
  }

  render() {
    const hasContentSlot = this.hasSlotController.test('content');
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    const browseFilesButton = html`
      <div @click="${this.handleBrowseFileClick}">
        <slot name="button">
          <awc-button part="button" variant=${this.error ? 'danger' : 'secondary'} ?disabled=${this.disabled}>
            ${this.buttonLabel ?? this.localize.term('browseFiles')}
          </awc-button>
        </slot>
      </div>
    `;

    return html`
      <div
        part="base"
        class=${classMap({
          'file-upload': true,
          'file-upload--disabled': this.disabled,
          'file-upload--error': !!this.error,
          'file-upload--dragged': this.isDragover,
          'file-upload--has-help-text': hasHelpText,
          'file-upload--button-only': this.buttonOnly,
          'file-upload--custom-content': hasContentSlot
        })}
      >
        <input
          type="file"
          id="file-input"
          style="display: none"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change="${this.handleFileInputChange}"
          @invalid=${this.handleInvalid}
          aria-describedby="help-text"
        />
        ${this.buttonOnly
          ? html`
              ${browseFilesButton}
              <div part="help-text" class="file-upload__help-text" aria-hidden=${hasHelpText ? 'false' : 'true'}>
                <slot name="help-text">${this.helpText}</slot>
              </div>
            `
          : html`
              <div id="dropzone" @drop="${this.onDrop}" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}">
                <slot name="content">
                  <div
                    part="content"
                    class=${classMap({
                      'file-upload__label': true,
                      'file-upload__label--has-file': !!this.files.length
                    })}
                  >
                    <div class="file-upload__label__container">
                      <slot name="image">
                        <div part="image" class="file-upload__label__container__image">
                          <awc-icon name="arrow-down-to-line" library="system"></awc-icon>
                        </div>
                      </slot>
                      <div>
                        <div>${this.dragDroplabel}</div>
                        <div
                          part="help-text"
                          class="file-upload__help-text"
                          aria-hidden=${hasHelpText ? 'false' : 'true'}
                        >
                          <slot name="help-text">${this.helpText}</slot>
                        </div>
                      </div>
                      ${!this.noButton ? browseFilesButton : ''}
                    </div>
                  </div>
                </slot>
              </div>
            `}
        ${!this.noFileList && this.files.length
          ? html`
              <div
                class=${classMap({
                  'file-upload__file-items': true
                })}
                id="file-items"
              >
                <div class="file-upload__file-items__header">
                  <span>${this.localize.term('files')}</span>
                </div>
                ${repeat(
                  this.files,
                  fileInfo => fileInfo.file.name,
                  (fileInfo, index) => html`
                    <awc-file-upload-item
                      size=${fileInfo.accepted ? fileInfo.file.size : nothing}
                      ?error=${!!fileInfo.error}
                      ?closable=${fileInfo.accepted}
                      ?loading=${fileInfo.loading}
                      progress=${ifDefined(fileInfo.progress)}
                      @awc-hide=${(event: AWCHideEvent) => {
                        event.stopPropagation();
                        this.handleFileRemove(index);
                      }}
                      data-test="${JSON.stringify(fileInfo)}"
                    >
                      ${fileInfo.file.name} ${fileInfo.error ? html`<div slot="error">${fileInfo.error}</div>` : ''}
                      <awc-icon
                        name=${fileInfo.error ? 'exclamation-triangle' : 'file'}
                        slot="image"
                        library="system"
                      ></awc-icon>
                    </awc-file-upload-item>
                  `
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }
}
