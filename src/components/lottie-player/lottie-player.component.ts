/* eslint-disable consistent-return */
import { type CSSResultGroup, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import Lottie, {
  type AnimationDirection,
  type AnimationEventName,
  type AnimationItem,
  type AnimationSegment,
  type AnimationConfig as LottieConfig,
  type RendererType
} from 'lottie-web';

import {
  aspectRatio,
  createDotLottie,
  createJSON,
  download,
  frameOutput,
  getAnimationData,
  getFilename,
  handleErrors,
  PlayerEvents,
  PlayerState,
  PlayMode,
  useId
} from './utils.js';

import AWCElement from '../../internal/awc-element.js';
import AWCIcon from '../icon/icon.component.js';
import AWCIconButton from '../icon-button/icon-button.component.js';
import AWCRange from '../range/range.component.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './lottie-player.styles.js';
import type {
  AnimationConfig,
  AnimationSettings,
  Autoplay,
  Controls,
  Loop,
  LottieJSON,
  LottieManifest,
  ObjectFit,
  Subframe
} from './types.js';

const generator = 'awc-lottie-player';

/**
 * @summary Web Component for playing Lottie animations in your web app.
 * @documentation https://webcomponents.adeliom.io/?path=/docs/components-lottie-player--documentation
 * @since 2.0
 *
 * @dependency awc-icon
 * @dependency awc-icon-button
 * @dependency awc-range
 *
 *
 * @event awc-lottie-complete -	Animation is complete – including all loops
 * @event awc-lottie-destroyed -	Animation is destroyed
 * @event awc-lottie-error -	The source cannot be parsed, fails to load or has format errors
 * @event awc-lottie-frame -	A new frame is entered
 * @event awc-lottie-freeze -	Animation is paused due to player being out of view
 * @event awc-lottie-load -	Animation is loaded
 * @event awc-lottie-loop -	A loop is completed
 * @event awc-lottie-play -	Animation has started playing
 * @event awc-lottie-pause -	Animation has paused
 * @event awc-lottie-ready -	Animation is loaded and player is ready
 * @event awc-lottie-stop -	Animation has stopped
 *
 * @error error - Error message slot for when the animation fails to load.
 *
 * @csspart base - The component's base wrapper.
 * @csspart animation - The animation container.
 * @csspart error - The error container.
 * @csspart controls - The controls container.
 * @csspart button - All buttons in the controls.
 * @csspart button-prev - The previous button.
 * @csspart button-next - The next button.
 * @csspart button-playpause - The play/pause button.
 * @csspart button-stop - The stop button.
 * @csspart button-loop - The loop button.
 * @csspart button-boomerang - The boomerang button.
 *
 * @cssproperty --toolbar-height - The height of the toolbar.
 */
export default class AWCLottiePlayer extends AWCElement {
  static styles: CSSResultGroup = [componentStyles, styles];
  static dependencies = {
    'awc-icon': AWCIcon,
    'awc-icon-button': AWCIconButton,
    'awc-range': AWCRange
  };
  /**
   * Play animation on load	and if visible.
   */
  @property({ type: Boolean, reflect: true })
  autoplay?: Autoplay;

  /**
   * Background color
   */
  @property({ type: String })
  background?: string = 'transparent';

  /**
   * Show controls
   */
  @property({ type: Boolean, reflect: true })
  controls?: Controls = false;

  /**
   * Number of times to loop the animation
   */
  @property({ type: Number })
  count?: number;

  /**
   * Current player state
   */
  @property({ type: String })
  currentState?: PlayerState = PlayerState.Loading;

  /**
   * Description for screen readers
   */
  @property({ type: String })
  description?: string;

  /**
   * Direction of animation (1 = forward, -1 = backward)
   */
  @property({ type: Number })
  direction?: AnimationDirection = 1;

  /**
   * Whether to play on mouseover
   */
  @property({ type: Boolean })
  hover? = false;

  /**
   * Intermission time in seconds between animation loops
   */
  @property({ type: Number })
  intermission? = 0;

  /**
   * Whether to loop the animation
   */
  @property({ type: Boolean, reflect: true })
  loop?: Loop = false;

  /**
   * Play mode (bounce or normal)
   */
  @property({ type: String })
  mode?: PlayMode = PlayMode.Normal;

  /**
   * Multi-animation settings
   * If set, these will override conflicting settings
   */
  @property({ type: Array })
  multiAnimationSettings?: AnimationSettings[];

  /**
   * Resizing to container
   */
  @property({ type: String })
  objectfit?: ObjectFit = 'contain';

  /**
   * Renderer to use (svg, canvas or html)
   */
  @property({ type: String })
  renderer?: RendererType = 'svg';

  /**
   * Play only part of an animation.
   * E.g. from frame 10 to frame 60 would be [10, 60]
   */
  @property({ type: Array })
  segment?: AnimationSegment;

  /**
   * Hide advanced controls like loop and boomerang
   */
  @property({ type: Boolean })
  simple?: boolean = false;

  /**
   * Speed
   */
  @property({ type: Number })
  speed?: number = 1;

  /**
   * JSON/dotLottie data or URL
   */
  @property({ type: String })
  src!: string;

  /**
   * When enabled this can help to reduce flicker on some animations, especially on Safari and iOS devices.
   */
  @property({ type: Boolean })
  subframe?: Subframe = true;

  /**
   * Animaiton Container
   */
  @query('.animation')
  protected container!: HTMLElement;

  /**
   * Seeker
   */
  @state()
  private _seeker = 0;

  /**
   * Which animation to show, if several
   */
  @state()
  private _currentAnimation = 0;

  private _intersectionObserver?: IntersectionObserver;
  private _lottieInstance: AnimationItem | null = null;
  private _identifier = this.id || useId('dotlottie');
  private _errorMessage = 'Something went wrong';

  private _isBounce = false;

  private _isDotLottie = false;

  private _manifest!: LottieManifest;

  /**
   * This is set to state, so that next-button will show up
   * on load, if controls are visible
   */
  @state()
  private _animations!: LottieJSON[];

  private _playerState = {
    prev: PlayerState.Loading,
    count: 0,
    loaded: false
  };

  /**
   * Get options from props
   * @returns { LottieConfig }
   */
  private _getOptions() {
    const preserveAspectRatio = this.objectfit && aspectRatio(this.objectfit);

    const currentAnimationSettings = this.multiAnimationSettings?.[this._currentAnimation];
    const currentAnimationManifest = this._manifest.animations?.[this._currentAnimation];

    const loop =
      currentAnimationSettings?.loop !== undefined
        ? !!currentAnimationSettings.loop
        : this.loop !== undefined
          ? !!this.loop
          : currentAnimationManifest.loop !== undefined && !!currentAnimationManifest.loop;

    const autoplay =
      currentAnimationSettings?.autoplay !== undefined
        ? !!currentAnimationSettings.autoplay
        : this.autoplay !== undefined
          ? !!this.autoplay
          : currentAnimationManifest.autoplay !== undefined && !!currentAnimationManifest.autoplay;

    const initialSegment =
      !this.segment || this.segment.some(val => val < 0)
        ? undefined
        : this.segment.every(val => val > 0)
          ? ([this.segment[0] - 1, this.segment[1] - 1] as AnimationSegment)
          : this.segment;

    const options: LottieConfig<'svg' | 'canvas' | 'html'> = {
      container: this.container,
      loop,
      autoplay,
      renderer: this.renderer,
      initialSegment,
      rendererSettings: {
        imagePreserveAspectRatio: preserveAspectRatio
        // runExpressions: false <-- TODO: Security measure, not tested
      }
    };

    switch (this.renderer) {
      case 'svg':
        options.rendererSettings = {
          ...options.rendererSettings,
          hideOnTransparent: true,
          preserveAspectRatio,
          progressiveLoad: true
        };
        break;
      case 'canvas':
        options.rendererSettings = {
          ...options.rendererSettings,
          clearCanvas: true,
          preserveAspectRatio,
          progressiveLoad: true
        };
        break;
      case 'html':
        options.rendererSettings = {
          ...options.rendererSettings,
          hideOnTransparent: true
        };
    }
    return options;
  }

  /**
   * Initialize Lottie Web player
   * @param { string | LottieJSON } src URL to lottie animation, or raw JSON data
   */
  public async load(src: string | LottieJSON) {
    if (!this.shadowRoot) return;

    // Load the resource
    try {
      const { animations, manifest, isDotLottie } = await getAnimationData(src);

      if (!animations || animations.some(animation => !this._isLottie(animation))) {
        throw new Error('Broken or corrupted file');
      }

      this._isBounce =
        this.multiAnimationSettings?.[this._currentAnimation]?.mode !== undefined
          ? this.multiAnimationSettings?.[this._currentAnimation]?.mode === PlayMode.Bounce
          : this.mode === PlayMode.Bounce;

      this._isDotLottie = !!isDotLottie;
      this._animations = animations;
      this._manifest = manifest ?? {
        animations: [
          {
            id: useId(),
            autoplay: this.autoplay,
            loop: this.loop,
            direction: this.direction,
            mode: this.mode,
            speed: this.speed
          }
        ]
      };

      // Clear previous animation, if any
      if (this._lottieInstance) this._lottieInstance.destroy();

      // Initialize lottie player and load animation
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'loadAnimation' does not exist on type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      this._lottieInstance = Lottie.loadAnimation({
        ...this._getOptions(),
        animationData: animations[this._currentAnimation]
      });
    } catch (err) {
      this._errorMessage = handleErrors(err).message;

      this.currentState = PlayerState.Error;

      this.emit(PlayerEvents.Error);
      return;
    }

    this._addEventListeners();

    const speed =
      this.multiAnimationSettings?.[this._currentAnimation]?.speed ??
      this.speed ??
      this._manifest.animations[this._currentAnimation].speed;

    const direction =
      this.multiAnimationSettings?.[this._currentAnimation]?.direction ??
      this.direction ??
      this._manifest.animations[this._currentAnimation].direction ??
      1;

    // Set initial playback speed and direction
    this.setSpeed(speed);
    this.setDirection(direction);
    this.setSubframe(!!this.subframe);

    // Start playing if autoplay is enabled
    if (this.autoplay) {
      if (this.direction === -1) this.seek('99%');

      if ('IntersectionObserver' in window) {
        this._intersectionObserver = new IntersectionObserver(entries => {
          for (const entry of entries) {
            if (entry.isIntersecting && !document.hidden) {
              this.play();
              continue;
            }

            this._freeze();
          }
        });

        this._intersectionObserver.observe(this.container);
        return;
      }
      this.play();
    }
  }

  /**
   * Get Lottie Manifest
   */
  public getManifest() {
    return this._manifest;
  }

  /**
   * Add event listeners
   */
  private _addEventListeners() {
    if (!this._lottieInstance) return;

    // Calculate and save the current progress of the animation
    this._lottieInstance.addEventListener<AnimationEventName>('enterFrame', this._enterFrame);

    // Handle animation play complete
    this._lottieInstance.addEventListener<AnimationEventName>('complete', this._complete);

    this._lottieInstance.addEventListener<AnimationEventName>('loopComplete', this._loopComplete);

    // Handle lottie-web ready event
    this._lottieInstance.addEventListener<AnimationEventName>('DOMLoaded', this._DOMLoaded);

    // Handle animation data load complete
    this._lottieInstance.addEventListener<AnimationEventName>('data_ready', this._dataReady);

    // Set error state when animation load fail event triggers
    this._lottieInstance.addEventListener<AnimationEventName>('data_failed', this._dataFailed);

    if (this.container && this.hover) {
      // Set handlers to auto play animation on hover if enabled
      this.container.addEventListener('mouseenter', this._mouseEnter);
      this.container.addEventListener('mouseleave', this._mouseLeave);
    }
  }

  /**
   * Remove event listeners
   */
  private _removeEventListeners() {
    if (!this._lottieInstance || !this.container) return;

    this._lottieInstance.removeEventListener<AnimationEventName>('enterFrame', this._enterFrame);
    this._lottieInstance.removeEventListener<AnimationEventName>('complete', this._complete);
    this._lottieInstance.removeEventListener<AnimationEventName>('loopComplete', this._loopComplete);
    this._lottieInstance.removeEventListener<AnimationEventName>('DOMLoaded', this._DOMLoaded);
    this._lottieInstance.removeEventListener<AnimationEventName>('data_ready', this._dataReady);
    this._lottieInstance.removeEventListener<AnimationEventName>('data_failed', this._dataFailed);

    this.container.removeEventListener('mouseenter', this._mouseEnter);
    this.container.removeEventListener('mouseleave', this._mouseLeave);
  }

  private _loopComplete() {
    if (!this._lottieInstance) {
      return;
    }

    const { firstFrame, totalFrames, playDirection } = this._lottieInstance;

    if (this.count) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this._isBounce ? (this._playerState.count += 1) : (this._playerState.count += 0.5);

      if (this._playerState.count >= this.count) {
        this.setLooping(false);

        this.currentState = PlayerState.Completed;
        this.emit(PlayerEvents.Complete);

        return;
      }
    }

    this.emit(PlayerEvents.Loop);

    if (this._isBounce) {
      this._lottieInstance.goToAndStop(playDirection === -1 ? firstFrame : totalFrames * 0.99, true);

      this._lottieInstance.setDirection((playDirection * -1) as AnimationDirection);

      return setTimeout(() => {
        this._lottieInstance?.play();
      }, this.intermission);
    }

    this._lottieInstance.goToAndStop(playDirection === -1 ? totalFrames * 0.99 : firstFrame, true);

    return setTimeout(() => {
      this._lottieInstance?.play();
    }, this.intermission);
  }

  private _enterFrame() {
    if (!this._lottieInstance) {
      return;
    }
    const { currentFrame, totalFrames } = this._lottieInstance;
    this._seeker = Math.floor((currentFrame / totalFrames) * 100);

    this.emit(PlayerEvents.Frame, {
      detail: {
        frame: currentFrame,
        seeker: this._seeker
      }
    });
  }

  private _complete() {
    if (!this._lottieInstance) {
      return;
    }

    if (this._animations.length > 1 && this.multiAnimationSettings?.[this._currentAnimation + 1]?.autoplay) {
      return this.next();
    }

    const { currentFrame, totalFrames } = this._lottieInstance;
    this._seeker = Math.floor((currentFrame / totalFrames) * 100);

    this.currentState = PlayerState.Completed;

    this.emit(PlayerEvents.Frame, {
      detail: {
        frame: currentFrame,
        seeker: this._seeker
      }
    });
  }

  private _DOMLoaded() {
    this._playerState.loaded = true;
    this.emit(PlayerEvents.Ready);
  }

  private _dataReady() {
    this.emit(PlayerEvents.Load);
  }

  private _dataFailed() {
    this.currentState = PlayerState.Error;
    this.emit(PlayerEvents.Error);
  }

  /**
   * Handle MouseEnter
   */
  private _mouseEnter() {
    if (this.hover && this.currentState !== PlayerState.Playing) {
      this.play();
    }
  }

  /**
   * Handle MouseLeave
   */
  private _mouseLeave() {
    if (this.hover && this.currentState === PlayerState.Playing) {
      this.stop();
    }
  }

  /**
   * Handle visibility change events
   */
  private _onVisibilityChange() {
    if (document.hidden && this.currentState === PlayerState.Playing) {
      this._freeze();
      return;
    }

    if (this.currentState === PlayerState.Frozen) {
      this.play();
    }
  }

  /**
   * Handles click and drag actions on the progress track
   * @param { Event & { HTMLInputElement } } event
   */
  private _handleSeekChange({ target }: Event) {
    if (!(target instanceof HTMLInputElement) || !this._lottieInstance || isNaN(Number(target.value))) return;

    this.seek(Math.floor((Number(target.value) / 100) * this._lottieInstance.totalFrames));

    setTimeout(() => {
      if (target.parentElement instanceof HTMLFormElement) {
        target.parentElement.reset();
      }
    }, 100);
  }

  private _isLottie(json: LottieJSON) {
    const mandatory: string[] = ['v', 'ip', 'op', 'layers', 'fr', 'w', 'h'];

    return mandatory.every((field: string) => Object.prototype.hasOwnProperty.call(json, field));
  }

  /**
   * Creates a new dotLottie file, by combinig several animations
   * @param { [ AnimationConfig ] } configs
   * @param { string } fileName
   * @param { boolean } shouldDownload Whether to trigger a download in the browser.
   * If set to false the function returns an ArrayBuffer. Defaults to true.
   *
   */
  public async addAnimation(configs: AnimationConfig[], fileName?: string, shouldDownload = true) {
    // Initialize meta object for animation, with fallbacks for
    // when the method is called indepenently
    const {
      animations = [],
      manifest = {
        animations: this.src
          ? [
              {
                id: this._identifier
              }
            ]
          : []
      }
    } = this.src ? await getAnimationData(this.src) : {};
    try {
      manifest.generator = generator;
      for (const config of configs) {
        const { url } = config;
        const { animations: animationsToAdd } = await getAnimationData(url);
        if (!animationsToAdd) {
          throw new Error('No animation loaded');
        }
        if (manifest.animations.some(({ id }) => id === config.id)) {
          throw new Error('Duplicate id for animation');
        }

        manifest.animations = [...manifest.animations, { id: config.id }];

        animations?.push(...animationsToAdd);
      }

      return createDotLottie({
        animations,
        manifest,
        fileName,
        shouldDownload
      });
    } catch (err) {
      console.error(handleErrors(err).message);
    }
  }

  /**
   * Returns the lottie-web instance used in the component
   */
  public getLottie() {
    return this._lottieInstance;
  }

  /**
   * Play
   */
  public play() {
    if (!this._lottieInstance) return;
    if (this.currentState) {
      this._playerState.prev = this.currentState;
    }

    this._lottieInstance.play();
    setTimeout(() => {
      this.currentState = PlayerState.Playing;
    }, 0);

    this.emit(PlayerEvents.Play);
  }

  /**
   * Pause
   */
  public pause() {
    if (!this._lottieInstance) return;
    if (this.currentState) {
      this._playerState.prev = this.currentState;
    }
    this._lottieInstance.pause();
    setTimeout(() => {
      this.currentState = PlayerState.Paused;
    }, 0);

    this.emit(PlayerEvents.Pause);
  }

  /**
   * Stop
   */
  public stop() {
    if (!this._lottieInstance) return;
    if (this.currentState) {
      this._playerState.prev = this.currentState;
    }
    this._playerState.count = 0;
    this._lottieInstance.stop();
    setTimeout(() => {
      this.currentState = PlayerState.Stopped;
    }, 0);

    this.emit(PlayerEvents.Stop);
  }

  /**
   * Destroy animation and element
   */
  public destroy() {
    if (!this._lottieInstance) return;

    this.currentState = PlayerState.Destroyed;

    this._lottieInstance.destroy();
    this._lottieInstance = null;
    this.emit(PlayerEvents.Destroyed);
    this.remove();

    document.removeEventListener('visibilitychange', this._onVisibilityChange);
  }

  /**
   * Seek to a given frame
   * @param { number | string } value Frame to seek to
   */
  public seek(value: number | string) {
    if (!this._lottieInstance) return;

    // Extract frame number from either number or percentage value
    const matches = value.toString().match(/^([0-9]+)(%?)$/);
    if (!matches) {
      return;
    }

    // Calculate and set the frame number
    const frame = Math.floor(
      matches[2] === '%' ? (this._lottieInstance.totalFrames * Number(matches[1])) / 100 : Number(matches[1])
    );

    // Set seeker to new frame number
    this._seeker = frame;

    // Send lottie player to the new frame
    if (
      this.currentState === PlayerState.Playing ||
      (this.currentState === PlayerState.Frozen && this._playerState.prev === PlayerState.Playing)
    ) {
      this._lottieInstance.goToAndPlay(frame, true);
      this.currentState = PlayerState.Playing;
      return;
    }
    this._lottieInstance.goToAndStop(frame, true);
    this._lottieInstance.pause();
  }

  /**
   * Snapshot and download the current frame as SVG
   */
  public snapshot() {
    if (!this.shadowRoot) return;

    // Get SVG element and serialize markup
    const svgElement = this.shadowRoot.querySelector('.animation svg');
    const data = svgElement instanceof Node ? new XMLSerializer().serializeToString(svgElement) : null;

    if (!data) {
      console.error('Could not serialize data');
      return;
    }

    download(data, {
      name: `${getFilename(this.src)}-${frameOutput(this._seeker)}.svg`,
      mimeType: 'image/svg+xml'
    });

    return data;
  }

  /**
   * Toggles subframe, for more smooth animations
   * @param { boolean } value Whether animation uses subframe
   */
  public setSubframe(value: boolean) {
    if (!this._lottieInstance) return;
    this.subframe = value;
    this._lottieInstance.setSubframe(value);
  }

  /**
   * Dynamically set count for loops
   */
  public setCount(value: number) {
    if (!this._lottieInstance) return;
    this.count = value;
  }

  /**
   * Freeze animation.
   * This internal state pauses animation and is used to differentiate between
   * user requested pauses and component instigated pauses.
   */
  private _freeze() {
    if (!this._lottieInstance) return;

    if (this.currentState) {
      this._playerState.prev = this.currentState;
    }
    this._lottieInstance.pause();
    setTimeout(() => {
      this.currentState = PlayerState.Frozen;
    }, 0);

    this.emit(PlayerEvents.Freeze);
  }

  /**
   * Reload animation
   */
  public async reload() {
    if (!this._lottieInstance) return;

    this._lottieInstance.destroy();

    if (this.src) {
      await this.load(this.src);
    }
  }

  /**
   * Set animation playback speed
   * @param { number } value Playback speed
   */
  public setSpeed(value = 1) {
    if (!this._lottieInstance) return;
    this.speed = value;
    this._lottieInstance.setSpeed(value);
  }

  /**
   * Animation play direction
   * @param { AnimationDirection } value Animation direction
   */
  public setDirection(value: AnimationDirection) {
    if (!this._lottieInstance) return;
    this.direction = value;
    this._lottieInstance.setDirection(value);
  }

  /**
   * Set loop
   * @param { boolean } value
   */
  public setLooping(value: boolean) {
    if (!this._lottieInstance) {
      return;
    }
    this.loop = value;
    this._lottieInstance.setLoop(value);
  }

  /**
   * Set Multi-animation settings
   * @param { AnimationSettings[] } settings
   */
  public setMultiAnimationSettings(settings: AnimationSettings[]) {
    if (!this._lottieInstance) {
      return;
    }
    this.multiAnimationSettings = settings;
  }

  /**
   * Toggle playing state
   */
  public togglePlay() {
    if (!this._lottieInstance) return;

    const { currentFrame, playDirection, totalFrames } = this._lottieInstance;
    if (this.currentState === PlayerState.Playing) {
      return this.pause();
    }
    if (this.currentState !== PlayerState.Completed) {
      return this.play();
    }
    this.currentState = PlayerState.Playing;
    if (this._isBounce) {
      this.setDirection((playDirection * -1) as AnimationDirection);
      return this._lottieInstance.goToAndPlay(currentFrame, true);
    }
    if (playDirection === -1) {
      return this._lottieInstance.goToAndPlay(totalFrames, true);
    }
    return this._lottieInstance.goToAndPlay(0, true);
  }

  /**
   * Toggle loop
   */
  public toggleLooping() {
    this.setLooping(!this.loop);
  }

  /**
   * Toggle Boomerang
   */
  public toggleBoomerang() {
    const curr = this.multiAnimationSettings?.[this._currentAnimation];

    if (curr?.mode !== undefined) {
      if (curr.mode === PlayMode.Normal) {
        curr.mode = PlayMode.Bounce;
        this._isBounce = true;
        return;
      }
      curr.mode = PlayMode.Normal;
      this._isBounce = false;
      return;
    }

    if (this.mode === PlayMode.Normal) {
      this.mode = PlayMode.Bounce;
      this._isBounce = true;
      return;
    }

    this.mode = PlayMode.Normal;
    this._isBounce = false;
  }

  private _switchInstance(isPrevious = false) {
    // Bail early if there is not animation to play
    if (!this._animations[this._currentAnimation]) return;

    try {
      // Clear previous animation
      if (this._lottieInstance) this._lottieInstance.destroy();

      // Re-initialize lottie player
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'loadAnimation' does not exist on type
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      this._lottieInstance = Lottie.loadAnimation({
        ...this._getOptions(),
        animationData: this._animations[this._currentAnimation]
      });

      //Check play mode for current animation
      if (this.multiAnimationSettings?.[this._currentAnimation]?.mode) {
        this._isBounce = this.multiAnimationSettings[this._currentAnimation].mode === PlayMode.Bounce;
      }

      // Remove event listeners to new Lottie instance, and add new
      this._removeEventListeners();
      this._addEventListeners();

      this.emit(isPrevious ? PlayerEvents.Previous : PlayerEvents.Next);

      if (this.multiAnimationSettings?.[this._currentAnimation]?.autoplay ?? this.autoplay) {
        this._lottieInstance?.goToAndPlay(0, true);
        this.currentState = PlayerState.Playing;
        return;
      }

      this._lottieInstance?.goToAndStop(0, true);
      this.currentState = PlayerState.Stopped;
    } catch (err) {
      this._errorMessage = handleErrors(err).message;

      this.currentState = PlayerState.Error;

      this.emit(PlayerEvents.Error);
    }
  }

  /**
   * Skip to next animation
   */
  public next() {
    if (this._currentAnimation < this._animations.length - 1) {
      this._currentAnimation++;
      this._switchInstance();
    }
  }

  /**
   * Skip to previous animation
   */
  public prev() {
    if (this._currentAnimation > 0) {
      this._currentAnimation--;
      this._switchInstance(true);
    }
  }

  public async convert({
    typeCheck,
    manifest,
    animations,
    src,
    fileName,
    shouldDownload = true
  }: {
    /** External type safety */
    typeCheck?: boolean;

    /** Externally added manifest */
    manifest?: LottieManifest;

    /** Externally added animations */
    animations?: LottieJSON[];

    src?: string;

    fileName?: string;

    /** Whether to trigger a download in the browser. Defaults to true */
    shouldDownload?: boolean;
  }) {
    if (typeCheck || this._isDotLottie) {
      return createJSON({
        animation: (await getAnimationData(src || this.src))?.animations?.[0],
        fileName: `${getFilename(fileName || this.src)}.json`,
        shouldDownload
      });
    }

    return createDotLottie({
      animations: animations || (await getAnimationData(this.src))?.animations,
      manifest: {
        ...(manifest || this._manifest),
        generator: generator
      },
      fileName: `${getFilename(fileName || this.src)}.lottie`,
      shouldDownload
    });
  }

  constructor() {
    super();
    this._complete = this._complete.bind(this);
    this._dataReady = this._dataReady.bind(this);
    this._dataFailed = this._dataFailed.bind(this);
    this._DOMLoaded = this._DOMLoaded.bind(this);
    this._enterFrame = this._enterFrame.bind(this);
    this._handleSeekChange = this._handleSeekChange.bind(this);
    this._loopComplete = this._loopComplete.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
    this._switchInstance = this._switchInstance.bind(this);

    this.convert = this.convert.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  /**
   * Initialize everything on component first render
   */
  override connectedCallback() {
    super.connectedCallback();

    // Add listener for Visibility API's change event.
    if (typeof document.hidden !== 'undefined') {
      document.addEventListener('visibilitychange', this._onVisibilityChange);
    }
  }

  protected override async firstUpdated() {
    // Add intersection observer for detecting component being out-of-view.
    if ('IntersectionObserver' in window) {
      this._intersectionObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && !document.hidden && this.currentState === PlayerState.Frozen) {
            this.play();
            continue;
          }

          if (this.currentState === PlayerState.Playing) {
            this._freeze();
          }
        }
      });

      this._intersectionObserver?.observe(this.container);
    }

    // Setup lottie player
    if (this.src) {
      await this.load(this.src);
    }
    this.emit(PlayerEvents.Rendered);
  }

  /**
   * Cleanup on component destroy
   */
  override disconnectedCallback() {
    super.disconnectedCallback();

    // Remove intersection observer for detecting component being out-of-view
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
      this._intersectionObserver = undefined;
    }

    // Destroy the animation instance
    if (this._lottieInstance) this._lottieInstance.destroy();

    // Remove the attached Visibility API's change event listener
    document.removeEventListener('visibilitychange', this._onVisibilityChange);
  }

  protected renderControls() {
    const isPlaying = this.currentState === PlayerState.Playing;
    const isPaused = this.currentState === PlayerState.Paused;
    const isStopped = this.currentState === PlayerState.Stopped;
    const isError = this.currentState === PlayerState.Error;

    return html`
      <div
        part="controls"
        class=${`lottie-controls toolbar ${isError ? 'has-error' : ''}`}
        aria-label="Lottie Animation controls"
      >
        <awc-icon-button
          part="button button-playpause"
          @click=${this.togglePlay}
          data-active=${isPlaying || isPaused}
          tabindex="0"
          aria-label="Toggle Play/Pause"
          library="system"
          name="${isPlaying ? 'pause-fill' : 'play-fill'}"
        ></awc-icon-button>
        <awc-icon-button
          part="button button-stop"
          @click=${this.stop}
          data-active=${isStopped}
          tabindex="0"
          aria-label="Stop"
          library="system"
          name="stop-fill"
        ></awc-icon-button>
        ${this._animations?.length > 1
          ? html`
              <awc-icon-button
                part="button button-prev"
                ?disabled=${this._currentAnimation === 0}
                @click=${this.prev}
                tabindex="0"
                aria-label="Previous animation"
                library="system"
                name="chevron-left"
              ></awc-icon-button>
              <awc-icon-button
                part="button button-next"
                ?disabled=${this._currentAnimation === this._animations?.length - 1}
                @click=${this.next}
                tabindex="0"
                aria-label="Next animation"
                library="system"
                name="chevron-right"
              ></awc-icon-button>
            `
          : nothing}
        <form part="progress-container" class="progress-container${this.simple ? ' simple' : ''}">
          <awc-range
            part="seeker"
            class="seeker"
            type="range"
            tooltip="none"
            min="0"
            max="100"
            step="1"
            value=${this._seeker}
            @change=${this._handleSeekChange}
            @mousedown=${this._freeze}
            tabindex="0"
            aria-label="Slider for search"
          ></awc-range>
        </form>
        ${this.simple
          ? nothing
          : html` <awc-icon-button
                part="button button-loop"
                @click=${this.toggleLooping}
                data-active=${this.loop ?? nothing}
                tabindex="0"
                aria-label="Toggle looping"
                library="system"
                name="infinity"
              ></awc-icon-button>
              <awc-icon-button
                part="button button-boomerang"
                @click=${this.toggleBoomerang}
                data-active=${this._isBounce}
                aria-label="Toggle boomerang"
                tabindex="0"
                library="system"
                name="loop"
              ></awc-icon-button>`}
      </div>
    `;
  }

  protected override render() {
    return html`
      <figure
        part="base"
        class=${'animation-container main'}
        data-controls=${this.controls ?? false}
        lang=${this.description ? document?.documentElement?.lang : 'en'}
        role="img"
        aria-label=${this.description ?? 'Lottie animation'}
        data-loaded=${this._playerState.loaded}
      >
        <div part="animation" class="animation" style="background:${this.background}">
          ${this.currentState === PlayerState.Error
            ? html` <div part="error" class="error">
                <slot name="error">
                  <awc-icon library="system" name="exclamation-triangle"></awc-icon>
                  <span>${this._errorMessage}</span>
                </slot>
              </div>`
            : nothing}
        </div>
        ${this.controls ? this.renderControls() : nothing}
      </figure>
    `;
  }
}
