export const DOTLOTTIE_VERSION = '^2.7.9';

// Define valid player states
export enum PlayerState {
  Completed = "completed",
  Error = "error",
  Fetching = "fetching",
  Frozen = "frozen",
  Initial = "initial",
  Loading = "loading",
  Paused = "paused",
  Playing = "playing",
  Ready = "ready",
  Stopped = "stopped"
}

// Define play modes
export enum PlayMode {
  Bounce = "bounce",
  Normal = "normal"
}

// Define player events
export enum PlayerEvents {
  Complete = "complete",
  DataFail = "data_fail",
  DataReady = "data_ready",
  Error = "error",
  Frame = "frame",
  Freeze = "freeze",
  LoopComplete = "loopComplete",
  Pause = "pause",
  Play = "play",
  Ready = "ready",
  Stop = "stop",
  VisibilityChange = "visibilityChange"
}
