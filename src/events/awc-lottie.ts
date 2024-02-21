import type { PlayerState as DotLottiePlayerState } from '@dotlottie/common';
import type { PlayerState as LottiePlayerState } from '../components/lottie/utils.js';

export type AWCLottieCompleteEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieDataFailedEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieDataReadyEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieErrorEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieFrameEvent = CustomEvent<{ frame: number; seeker: number }>;
export type AWCLottieFreezeEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieLoopCompleteEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottiePauseEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottiePlayEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieRenderedEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieReadyEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieStopEvent = CustomEvent<Record<PropertyKey, never>>;
export type AWCLottieVisibilityChangeEvent = CustomEvent<{ visibilityPercentage: number }>;
export type AWCLottieStateChangeEvent = CustomEvent<{
  prevState?: DotLottiePlayerState | LottiePlayerState;
  state: DotLottiePlayerState | LottiePlayerState;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'awc-lottie-rendered': AWCLottieRenderedEvent;
    'awc-lottie-complete': AWCLottieCompleteEvent;
    'awc-lottie-data_failed': AWCLottieDataFailedEvent;
    'awc-lottie-data_ready': AWCLottieDataReadyEvent;
    'awc-lottie-error': AWCLottieErrorEvent;
    'awc-lottie-frame': AWCLottieFrameEvent;
    'awc-lottie-freeze': AWCLottieFreezeEvent;
    'awc-lottie-loopComplete': AWCLottieLoopCompleteEvent;
    'awc-lottie-pause': AWCLottiePauseEvent;
    'awc-lottie-play': AWCLottiePlayEvent;
    'awc-lottie-ready': AWCLottieReadyEvent;
    'awc-lottie-stop': AWCLottieStopEvent;
    'awc-lottie-visibilityChange': AWCLottieVisibilityChangeEvent;
    'awc-lottie-stateChange': AWCLottieStateChangeEvent;
  }
}
