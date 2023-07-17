import '../icon/icon.js';
import '../image/image.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch.js';
import AWCElement from '../../internal/awc-element.js';
import styles from './avatar.styles.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Avatars are used to represent a person or object.
 * @documentation https://awc.a-dev.cloud/components/avatar
 * @status stable
 * @since 1.0
 *
 * @dependency awc-icon
 * @dependency awc-image
 *
 * @slot icon - The default icon to use when no image or initials are present. Works best with `<awc-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the avatar's icon.
 * @csspart initials - The container that wraps the avatar's initials.
 * @csspart image - The avatar image. Only shown when the `image` attribute is set.
 *
 * @cssproperty --size - The size of the avatar.
 */
@customElement('awc-avatar')
export default class AWCAvatar extends AWCElement {
  static styles: CSSResultGroup = styles;

  @state() private hasError = false;

  /** The image source to use for the avatar. */
  @property() image = '';

  /** A label to use to describe the avatar to assistive devices. */
  @property() label = '';

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  @property() initials = '';

  /** Indicates how the browser should load the image. */
  @property() loading: 'eager' | 'lazy' = 'eager';

  /** The shape of the avatar. */
  @property({ reflect: true }) shape: 'circle' | 'square' | 'rounded' = 'circle';

  @watch('image')
  handleImageChange() {
    // Reset the error when a new image is provided
    this.hasError = false;
  }

  render() {
    const avatarWithImage = html`
      <awc-image
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        aspectRatio="1"
        width="48"
        alt=""
        @error="${() => (this.hasError = true)}"
      ></awc-icon>
    `;

    let avatarWithoutImage = html``;

    if (this.initials) {
      avatarWithoutImage = html`<div part="initials" class="avatar__initials">${this.initials}</div>`;
    } else {
      avatarWithoutImage = html`
        <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
          <awc-icon name="person-fill" library="system"></awc-icon>
        </slot>
      `;
    }

    return html`
      <div
        part="base"
        class=${classMap({
      avatar: true,
      'avatar--circle': this.shape === 'circle',
      'avatar--rounded': this.shape === 'rounded',
      'avatar--square': this.shape === 'square'
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.image && !this.hasError ? avatarWithImage : avatarWithoutImage}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'awc-avatar': AWCAvatar;
  }
}
