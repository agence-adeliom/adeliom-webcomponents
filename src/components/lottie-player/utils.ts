/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable consistent-return */
import { strFromU8, strToU8, unzip as unzipOrg, type Unzipped, zip, type Zippable } from 'fflate';

import type { LottieAsset, LottieJSON, LottieManifest, ObjectFit } from './types.js';

export enum PlayerState {
  Completed = 'completed',
  Destroyed = 'destroyed',
  Error = 'error',
  Frozen = 'frozen',
  Loading = 'loading',
  Paused = 'paused',
  Playing = 'playing',
  Stopped = 'stopped'
}

export enum PlayMode {
  Bounce = 'bounce',
  Normal = 'normal'
}

export enum PlayerEvents {
  Complete = 'awc-lottie-complete',
  Destroyed = 'awc-lottie-destroyed',
  Error = 'awc-lottie-error',
  Frame = 'awc-lottie-frame',
  Freeze = 'awc-lottie-freeze',
  Load = 'awc-lottie-load',
  Loop = 'awc-lottie-loop',
  Next = 'awc-lottie-next',
  Pause = 'awc-lottie-pause',
  Play = 'awc-lottie-play',
  Previous = 'awc-lottie-previous',
  Ready = 'awc-lottie-ready',
  Rendered = 'awc-lottie-rendered',
  Stop = 'awc-lottie-stop'
}

export class CustomError extends Error {
  status?: number;
}

export const addExt = (ext: string, str?: string) => {
  if (!str) return;
  if (getExt(str)) {
    if (getExt(str) === ext) return str;

    return `${getFilename(str)}.${ext}`;
  }
  return `${str}.${ext}`;
};

export const aspectRatio = (objectFit: ObjectFit) => {
  switch (objectFit) {
    case 'contain':
    case 'scale-down':
      return 'xMidYMid meet';
    case 'cover':
      return 'xMidYMid slice';
    case 'fill':
      return 'none';
    case 'none':
      return 'xMinYMin slice';
    default:
      return 'xMidYMid meet';
  }
};
/**
 * Convert Base64 encoded string to Uint8Array
 * @param { string } str Base64 encoded string
 * @returns { Uint8Array } UTF-8/Latin-1 binary
 */
export const base64ToU8 = (str: string) =>
  strToU8(isServer() ? Buffer.from(parseBase64(str), 'base64').toString('binary') : atob(parseBase64(str)), true);

/**
 * Convert a JSON Lottie to dotLottie or combine several animations and download new dotLottie file in your browser.
 */
export const createDotLottie = async ({
  animations,
  manifest,
  fileName,
  shouldDownload = true
}: {
  animations?: LottieJSON[];
  manifest: LottieManifest;
  fileName?: string;
  shouldDownload?: boolean;
}) => {
  try {
    if (!animations?.length || !manifest) {
      throw new Error(
        `Missing or malformed required parameter(s):\n ${!animations?.length ? '- animations\n' : ''} ${!manifest ? '- manifest \n' : ''}`
      );
    }

    const name = addExt('lottie', fileName) || `${useId()}.lottie`;

    const dotlottie: Zippable = {
      'manifest.json': [
        strToU8(JSON.stringify(manifest), true),
        { level: 0 } // <- Level of compression (no compression)
      ]
    };

    for (const [i, animation] of animations.entries()) {
      for (const asset of animation.assets ?? []) {
        if (!asset.p || (!isImage(asset) && !isAudio(asset))) {
          continue;
        }

        const { p: file, u: path } = asset;
        const assetId = asset.id || useId();
        const isEncoded = file.startsWith('data:');
        const ext = isEncoded ? getExtFromB64(file) : getExt(file);

        // Check if the asset is already base64-encoded. If not, get path, fetch it, and encode it
        const dataURL = isEncoded
          ? file
          : await fileToBase64(path ? (path.endsWith('/') && `${path}${file}`) || `${path}/${file}` : file);

        asset.p = `${assetId}.${ext}`;

        // File is embedded, so path is ''
        asset.u = '';

        // File is encoded
        asset.e = 1;

        dotlottie[`${isAudio(asset) ? 'audio' : 'images'}/${assetId}.${ext}`] = [
          base64ToU8(dataURL),
          { level: 9 } // <- Level of compression
        ];
      }

      dotlottie[`animations/${manifest.animations[i].id}.json`] = [
        strToU8(JSON.stringify(animation), true),
        { level: 9 } // <- Level of compression
      ];
    }

    const buffer = await getArrayBuffer(dotlottie);

    return shouldDownload
      ? download(buffer, {
          name,
          mimeType: 'application/zip'
        })
      : buffer;
  } catch (err) {
    console.error(`❌ ${handleErrors(err).message}`);
  }
};

export const createJSON = ({
  animation,
  fileName,
  shouldDownload
}: {
  animation?: LottieJSON;
  fileName?: string;
  shouldDownload?: boolean;
}) => {
  try {
    if (!animation) {
      throw new Error("Missing or malformed required parameter(s):\n - animation\n'");
    }

    const name = addExt('json', fileName) || `${useId()}.json`;
    const jsonString = JSON.stringify(animation);
    return shouldDownload
      ? download(jsonString, {
          name,
          mimeType: 'application/json'
        })
      : jsonString;
  } catch (err) {
    console.error(`❌ ${handleErrors(err).message}`);
  }
};

/**
 * Download file, either SVG or dotLottie.
 * @param { string } data The data to be downloaded
 * @param { string } name Don't include file extension in the filename
 */
export const download = (
  data: string | ArrayBuffer,
  options?: {
    name: string;
    mimeType: string;
  }
) => {
  const blob = new Blob([data], { type: options?.mimeType });

  const fileName = options?.name || useId();
  const dataURL = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = dataURL;
  link.download = fileName;
  link.hidden = true;
  document.body.appendChild(link);

  link.click();

  setTimeout(() => {
    link.remove();
    URL.revokeObjectURL(dataURL);
  }, 1000);
};

export const fileToBase64 = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
          return;
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        reject();
      };
      reader.readAsDataURL(blob);
    } catch (e) {
      reject(e);
    }
  });
};

export const frameOutput = (frame?: number) => ((frame ?? 0) + 1).toString().padStart(3, '0');

export const getAnimationData = async (
  input: unknown
): Promise<{
  animations?: LottieJSON[];
  manifest?: LottieManifest;
  isDotLottie: boolean;
}> => {
  try {
    if (!input || (typeof input !== 'string' && typeof input !== 'object')) {
      throw new Error('Broken file or invalid file format');
    }

    if (typeof input !== 'string') {
      const animations = Array.isArray(input) ? input : [input];
      return {
        animations,
        manifest: undefined,
        isDotLottie: false
      };
    }

    const result = await fetch(input);

    if (!result.ok) {
      const error = new CustomError(result.statusText);
      error.status = result.status;
      throw error;
    }

    /**
     * Check if file is JSON, first by parsing file name for extension,
     * then – if filename has no extension – by cloning the response
     * and parsing it for content.
     */
    const ext = getExt(input);
    if (ext === 'json' || !ext) {
      if (ext) {
        const lottie = await result.json();
        return {
          animations: [lottie],
          manifest: undefined,
          isDotLottie: false
        };
      }
      const text = await result.clone().text();
      try {
        const lottie = JSON.parse(text);
        return {
          animations: [lottie],
          manifest: undefined,
          isDotLottie: false
        };
      } catch (e) {
        console.warn(e);
      }
    }

    const { data, manifest } = await getLottieJSON(result);

    return {
      animations: data,
      manifest,
      isDotLottie: true
    };
  } catch (err) {
    console.error(`❌ ${handleErrors(err).message}`);
    return {
      animations: undefined,
      manifest: undefined,
      isDotLottie: false
    };
  }
};

export const getArrayBuffer = async (zippable: Zippable) => {
  const arrayBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    zip(zippable, { level: 9 }, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data.buffer);
    });
  });
  return arrayBuffer;
};

/**
 * Get extension from filename, URL or path
 * @param { string } str Filename, URL or path
 */
export const getExt = (str?: string) => {
  if (!str || !hasExt(str)) return;
  return str.split('.').pop()?.toLowerCase();
};

export const getExtFromB64 = (str: string) => {
  const mime = str.split(':')[1].split(';')[0];
  return mime.split('/')[1].split('+')[0];
};

/**
 * Parse URL to get filename
 * @param { string } src The url string
 * @param { boolean } keepExt Whether to include file extension
 * @returns { string } Filename, in lowercase
 */
export const getFilename = (src: string, keepExt?: boolean) => {
  // Because the regex strips all special characters, we need to extract the file extension, so we can add it later if we need it
  const ext = getExt(src);
  return `${src
    .split('/')
    .pop()
    ?.replace(/\.[^.]*$/, '')
    .replace(/\W+/g, '')}${keepExt && ext ? `.${ext}` : ''}`; //.toLowerCase()
};

export const getLottieJSON = async (resp: Response) => {
  const unzipped = await unzip(resp);
  const manifest = getManifest(unzipped);
  const data = [];
  const toResolve: Promise<void>[] = [];
  for (const { id } of manifest.animations) {
    const str = strFromU8(unzipped[`animations/${id}.json`]);
    const lottie: LottieJSON = JSON.parse(str);

    toResolve.push(resolveAssets(unzipped, lottie.assets));
    data.push(lottie);
  }

  await Promise.all(toResolve);

  return {
    data,
    manifest
  };
};

export const getManifest = (unzipped: Unzipped) => {
  const file = strFromU8(unzipped['manifest.json'], false);
  const manifest: LottieManifest = JSON.parse(file);

  if (!('animations' in manifest)) throw new Error('Manifest not found');
  if (!manifest.animations.length) throw new Error('No animations listed in manifest');

  return manifest;
};

export const getMimeFromExt = (ext?: string) => {
  switch (ext) {
    case 'svg':
    case 'svg+xml':
      return 'image/svg+xml';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
    case 'gif':
    case 'webp':
      return `image/${ext}`;
    case 'mp3':
    case 'mpeg':
    case 'wav':
      return `audio/${ext}`;
    default:
      return '';
  }
};

export const handleErrors = (err: unknown) => {
  const res = {
    message: 'Unknown error',
    status: isServer() ? 500 : 400
  };
  if (err && typeof err === 'object') {
    if ('message' in err && typeof err.message === 'string') {
      res.message = err.message;
    }
    if ('status' in err) {
      res.status = Number(err.status);
    }
  }
  return res;
};

export const hasExt = (path?: string) => {
  const lastDotIndex = path?.split('/').pop()?.lastIndexOf('.');
  return (lastDotIndex ?? 0) > 1 && path && path.length - 1 > (lastDotIndex ?? 0);
};

export const isAudio = (asset: LottieAsset) =>
  !('h' in asset) && !('w' in asset) && 'p' in asset && 'e' in asset && 'u' in asset && 'id' in asset;

export const isBase64 = (str?: string) => {
  if (!str) return false;
  const regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return regex.test(parseBase64(str));
};

export const isImage = (asset: LottieAsset) => 'w' in asset && 'h' in asset && !('xt' in asset) && 'p' in asset;

export const isServer = () => !window?.document;

export const parseBase64 = (str: string) => str.substring(str.indexOf(',') + 1);

export const resolveAssets = async (unzipped: Unzipped, assets?: LottieAsset[]) => {
  if (!Array.isArray(assets)) return;

  const toResolve: Promise<void>[] = [];

  for (const asset of assets) {
    if (!isAudio(asset) && !isImage(asset)) continue;

    const type = isImage(asset) ? 'images' : 'audio';
    const u8 = unzipped?.[`${type}/${asset.p}`];

    if (!u8) continue;

    toResolve.push(
      new Promise<void>(resolveAsset => {
        const assetB64 = isServer()
          ? Buffer.from(u8).toString('base64')
          : btoa(u8.reduce((dat, byte) => `${dat}${String.fromCharCode(byte)}`, ''));

        asset.p =
          asset.p?.startsWith('data:') || isBase64(asset.p)
            ? asset.p
            : `data:${getMimeFromExt(getExt(asset.p))};base64,${assetB64}`;
        asset.e = 1;
        asset.u = '';

        resolveAsset();
      })
    );
  }

  await Promise.all(toResolve);
};

export const unzip = async (
  resp: Response
  // filter: UnzipFileFilter = () => true
): Promise<Unzipped> => {
  const u8 = new Uint8Array(await resp.arrayBuffer());
  const unzipped = await new Promise<Unzipped>((resolve, reject) => {
    unzipOrg(
      u8,
      /*{ filter },*/ (err, file) => {
        if (err) {
          reject(err);
        }
        resolve(file);
      }
    );
  });
  return unzipped;
};

export const useId = (prefix?: string) => {
  const s4 = () => {
    // eslint-disable-next-line no-bitwise
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return `${prefix ?? `:${s4()}`}-${s4()}`;
};
