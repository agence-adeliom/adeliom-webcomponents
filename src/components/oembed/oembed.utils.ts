export type Layout = "fixed" | "constrained" | "fullWidth";

type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export interface OEmbedSourceOptions {
  src: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  layout?: Layout;
}

/**
 * HTML image attributes, common to image components in multiple frameworks.
 * For React (and potentially other frameworks added in the future), convert to camelCase.
 */
export interface CoreOEmbedAttributes<TStyle = Record<string, string>> {
  src?: string | number | null;
  width?: string | number | null;
  height?: string | number | null;
  loading?: "eager" | "lazy" | null;
  style?: TStyle;
}

export type BaseOEmbedProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = Exclude<TOEmbedAttributes, "srcset" | "style"> &
  OEmbedSourceOptions
;

type BaseOEmbedWithAspectRatioProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = BaseOEmbedProps<TOEmbedAttributes, TStyle> & {
  aspectRatio: number;
};

type OEmbedWithAspectRatioAndWidthProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = BaseOEmbedWithAspectRatioProps<TOEmbedAttributes, TStyle> & {
  width: number;
};

type OEmbedWithAspectRatioAndHeightProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = BaseOEmbedWithAspectRatioProps<TOEmbedAttributes, TStyle> & {
  height: number;
};

type OEmbedWithWidthAndHeightProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = BaseOEmbedProps<TOEmbedAttributes, TStyle> & {
  width: number;
  height: number;
};

type OEmbedWithSizeProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> =
  | OEmbedWithAspectRatioAndWidthProps<TOEmbedAttributes, TStyle>
  | OEmbedWithAspectRatioAndHeightProps<TOEmbedAttributes, TStyle>
  | OEmbedWithWidthAndHeightProps<TOEmbedAttributes, TStyle>;

export type FixedOEmbedProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = Prettify<
  OEmbedWithSizeProps<TOEmbedAttributes, TStyle> & {
  layout: "fixed";
}
>;

export type ConstrainedOEmbedProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = OEmbedWithSizeProps<TOEmbedAttributes, TStyle> & {
  // Default is `constrained`, so this is optional
  layout?: "constrained";
};

export type FullWidthOEmbedProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle
> = BaseOEmbedProps<TOEmbedAttributes, TStyle> & {
  layout: "fullWidth";
  width?: never;
};

export type AWCOEmbedProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle = TOEmbedAttributes["style"]
> =
  | FixedOEmbedProps<TOEmbedAttributes, TStyle>
  | ConstrainedOEmbedProps<TOEmbedAttributes, TStyle>
  | FullWidthOEmbedProps<TOEmbedAttributes, TStyle>;

const pixelate = (value?: number) =>
  value || value === 0 ? `${value}px` : undefined;

/**
 * Gets the styles for an OEmbed
 */
export const getStyle = <
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle = Record<string, string>
>({
    width,
    height,
    aspectRatio,
    layout
  }: Pick<
  AWCOEmbedProps<TOEmbedAttributes, TStyle>,
  "width" | "height" | "aspectRatio" | "layout"
>): TOEmbedAttributes["style"] => {
  const styleEntries: [prop: string, value: string | undefined][] = [];

  if (layout === "fixed") {
    styleEntries.push(["width", pixelate(width)]);
    styleEntries.push(["height", pixelate(height)]);
  }
  if (layout === "constrained") {
    styleEntries.push(["max-width", pixelate(width)]);
    styleEntries.push(["max-height", pixelate(height)]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : undefined,
    ]);
    styleEntries.push(["width", "100%"]);
  }
  if (layout === "fullWidth") {
    styleEntries.push(["width", "100%"]);
    styleEntries.push([
      "aspect-ratio",
      aspectRatio ? `${aspectRatio}` : undefined,
    ]);
    styleEntries.push(["height", pixelate(height)]);
  }
  return Object.fromEntries(
    styleEntries.filter(([, value]) => value)
  ) as TOEmbedAttributes["style"];
};


/**
 * Generates the props for an img element
 */
export function transformProps<
  TOEmbedAttributes extends CoreOEmbedAttributes<TStyle>,
  TStyle = Record<string, string>
>({
    width,
    height,
    layout = "constrained",
    aspectRatio,
    ...props
  }: AWCOEmbedProps<TOEmbedAttributes, TStyle>): TOEmbedAttributes {


  width = (width && Number(width)) || undefined;
  height = (height && Number(height)) || undefined;

  // Calculate dimensions from aspect ratio
  if (aspectRatio) {
    if (width) {
      if (height) {
        console.error(
          "Ignoring aspectRatio because width and height are both set"
        );
      } else {
        height = width / aspectRatio;
      }
    } else if (height) {
      width = height * aspectRatio;
    } else if (layout !== "fullWidth") {
      // Fullwidth OEmbeds have 100% width, so aspectRatio is applicable
      console.error(
        "When aspectRatio is set, either width or height must also be set"
      );
    }
  } else if (width && height) {
    aspectRatio = width / height;
  } else if (layout !== "fullWidth") {
    // Fullwidth OEmbeds don't need dimensions
    console.error("Either aspectRatio or both width and height must be set");
  }


  const styleProps = {
    width,
    height,
    aspectRatio,
    layout,
  } as Pick<
    AWCOEmbedProps<TOEmbedAttributes, TStyle>,
    "width" | "height" | "aspectRatio" | "layout"
  >;

  props.style = {
    ...getStyle<TOEmbedAttributes, TStyle>(styleProps),
    ...props.style,
  };


  if (layout === "fullWidth" || layout === "constrained") {
    width = undefined;
    height = undefined;
  }

  return {
    ...props,
    width,
    height,
  } as TOEmbedAttributes;
}
