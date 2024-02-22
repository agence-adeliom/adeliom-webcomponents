export type AWCLottieCompleteEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieDestroyedEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieErrorEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieFrameEvent = CustomEvent<{ frame: number; seeker: number }>;
export type AWCLottieFreezeEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottiePauseEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottiePlayEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieRenderedEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieReadyEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieLoadEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieLoopEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieNextEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottiePreviousEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieStopEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-lottie-complete': AWCLottieCompleteEvent;
    'awc-lottie-destroyed': AWCLottieDestroyedEvent;
    'awc-lottie-error': AWCLottieErrorEvent;
    'awc-lottie-frame': AWCLottieFrameEvent;
    'awc-lottie-freeze': AWCLottieFreezeEvent;
    'awc-lottie-load': AWCLottieLoadEvent;
    'awc-lottie-loop': AWCLottieLoopEvent;
    'awc-lottie-next': AWCLottieNextEvent;
    'awc-lottie-pause': AWCLottiePauseEvent;
    'awc-lottie-play': AWCLottiePlayEvent;
    'awc-lottie-previous': AWCLottiePreviousEvent;
    'awc-lottie-ready': AWCLottieReadyEvent;
    'awc-lottie-rendered': AWCLottieRenderedEvent;
    'awc-lottie-stop': AWCLottieStopEvent;
  }
}
