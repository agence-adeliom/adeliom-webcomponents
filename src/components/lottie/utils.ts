export const LOTTIE_PLAYER_VERSION = '1.7.0';
export const LOTTIE_WEB_VERSION = '^5.10.0';

// Define valid player states
export enum PlayerState {
  Destroyed = 'destroyed',
  Error = 'error',
  Frozen = 'frozen',
  Loading = 'loading',
  Paused = 'paused',
  Playing = 'playing',
  Stopped = 'stopped'
}

// Define play modes
export enum PlayMode {
  Bounce = 'bounce',
  Normal = 'normal'
}

// Define player events
export enum PlayerEvents {
  Complete = 'complete',
  Destroyed = 'destroyed',
  Error = 'error',
  Frame = 'frame',
  Freeze = 'freeze',
  Load = 'load',
  Loop = 'loop',
  Pause = 'pause',
  Play = 'play',
  Ready = 'ready',
  Rendered = 'rendered',
  Stop = 'stop'
}

export interface Utils {
  lottiePlayerVersion: string;
  lottieWebVersion: string;
}

/**
 * Parse a resource into a JSON object or a URL string
 */
export function parseSrc(src: string | object): string | object {
  if (typeof src === 'object') {
    return src;
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(src);
  } catch (e) {
    // Try construct an absolute URL from the src URL
    const srcUrl: URL = new URL(src, window.location.href);

    return srcUrl.toString();
  }
}

export function isLottie(json: Record<string, unknown>): boolean {
  const mandatory: string[] = ['v', 'ip', 'op', 'layers', 'fr', 'w', 'h'];

  return mandatory.every((field: string) => Object.prototype.hasOwnProperty.call(json, field));
}

export async function fromURL(url: string): Promise<object> {
  if (typeof url !== 'string') {
    throw new Error(`The url value must be a string`);
  }

  let json: object = {};

  try {
    // Try construct an absolute URL from the src URL
    const srcUrl: URL = new URL(url);

    // Fetch the JSON file from the URL
    const result: Response = await fetch(srcUrl.toString());

    json = (await result.json()) as object;
  } catch (err) {
    throw new Error(`An error occurred while trying to load the Lottie file from URL`);
  }

  return json;
}
