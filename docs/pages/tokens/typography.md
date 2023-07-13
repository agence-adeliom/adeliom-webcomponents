---
meta:
  title: Typography
  description: Typography tokens are used to maintain a consistent set of font styles throughout your app.
---

# Typography Tokens

Typography tokens are used to maintain a consistent set of font styles throughout your app.

## Font Family

The default font stack is designed to be simple and highly available on as many devices as possible.

| Token              | Value                                                                                                                                         | Example                                                                                               |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| `--awc-font-sans`  | -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol' | <span style="font-family: var(--awc-font-sans)">The quick brown fox jumped over the lazy dog.</span>  |
| `--awc-font-serif` | Georgia, 'Times New Roman', serif                                                                                                             | <span style="font-family: var(--awc-font-serif)">The quick brown fox jumped over the lazy dog.</span> |
| `--awc-font-mono`  | SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;                                                                                | <span style="font-family: var(--awc-font-mono)">The quick brown fox jumped over the lazy dog.</span>  |

## Font Size

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font
size.

| Token                       | Value           | Example                                                           |
|-----------------------------|-----------------|-------------------------------------------------------------------|
| `--awc-font-size-2x-small`  | 0.625rem (10px) | <span style="font-size: var(--awc-font-size-2x-small)">Aa</span>  |
| `--awc-font-size-x-small`   | 0.75rem (12px)  | <span style="font-size: var(--awc-font-size-x-small)">Aa</span>   |
| `--awc-font-size-small`     | 0.875rem (14px) | <span style="font-size: var(--awc-font-size-small)">Aa</span>     |
| `--awc-font-size-medium`    | 1rem (16px)     | <span style="font-size: var(--awc-font-size-medium)">Aa</span>    |
| `--awc-font-size-large`     | 1.125rem (18px) | <span style="font-size: var(--awc-font-size-large)">Aa</span>     |
| `--awc-font-size-x-large`   | 1.25rem (20px)  | <span style="font-size: var(--awc-font-size-x-large)">Aa</span>   |
| `--awc-font-size-2x-large`  | 1.5rem (24px)   | <span style="font-size: var(--awc-font-size-2x-large)">Aa</span>  |
| `--awc-font-size-3x-large`  | 1.875rem (30px) | <span style="font-size: var(--awc-font-size-3x-large)">Aa</span>  |
| `--awc-font-size-4x-large`  | 2.25rem (36px)  | <span style="font-size: var(--awc-font-size-4x-large)">Aa</span>  |
| `--awc-font-size-5x-large`  | 3rem (48px)     | <span style="font-size: var(--awc-font-size-5x-large)">Aa</span>  |
| `--awc-font-size-6x-large`  | 3.75rem (60px)  | <span style="font-size: var(--awc-font-size-6x-large)">Aa</span>  |
| `--awc-font-size-7x-large`  | 4.5rem (72px)   | <span style="font-size: var(--awc-font-size-7x-large)">Aa</span>  |
| `--awc-font-size-8x-large`  | 4.75rem (76px)  | <span style="font-size: var(--awc-font-size-8x-large)">Aa</span>  |
| `--awc-font-size-9x-large`  | 5rem (80px)     | <span style="font-size: var(--awc-font-size-9x-large)">Aa</span>  |
| `--awc-font-size-10x-large` | 5.25rem (84px)  | <span style="font-size: var(--awc-font-size-10x-large)">Aa</span> |

Font sizes use `rem` units so they scale with the base font size. The pixel values displayed are based on a 16px font
size.

| Token                      | Value                           | Value >= 1024px               | Value >= 1280px               | Example                                                          |
|----------------------------|---------------------------------|-------------------------------|-------------------------------|------------------------------------------------------------------|
| `--awc-font-size-base`     | `var(--awc-font-size-medium)`   | `var(--awc-font-size-medium)`   | `var(--awc-font-size-medium)`   | <span style="font-size: var(--awc-font-size-base)">Aa</span>     |
| `--awc-font-size-heading1` | `var(--awc-font-size-5x-large)` | `var(--awc-font-size-6x-large)` | `var(--awc-font-size-7x-large)` | <span style="font-size: var(--awc-font-size-heading1)">Aa</span> |
| `--awc-font-size-heading2` | `var(--awc-font-size-4x-large)` | `var(--awc-font-size-5x-large)` | `var(--awc-font-size-6x-large)` | <span style="font-size: var(--awc-font-size-heading2)">Aa</span> |
| `--awc-font-size-heading3` | `var(--awc-font-size-3x-large)` | `var(--awc-font-size-4x-large)` | `var(--awc-font-size-5x-large)` | <span style="font-size: var(--awc-font-size-heading3)">Aa</span> |
| `--awc-font-size-heading4` | `var(--awc-font-size-2x-large)` | `var(--awc-font-size-3x-large)` | `var(--awc-font-size-4x-large)` | <span style="font-size: var(--awc-font-size-heading4)">Aa</span> |
| `--awc-font-size-heading5` | `var(--awc-font-size-x-large)`  | `var(--awc-font-size-2x-large)` | `var(--awc-font-size-3x-large)` | <span style="font-size: var(--awc-font-size-heading5)">Aa</span> |
| `--awc-font-size-heading6` | `var(--awc-font-size-large)`    | `var(--awc-font-size-x-large)`  | `var(--awc-font-size-2x-large)` | <span style="font-size: var(--awc-font-size-heading6)">Aa</span> |

## Font Weight

| Token                        | Value | Example                                                                                                          |
|------------------------------|-------|------------------------------------------------------------------------------------------------------------------|
| `--awc-font-weight-light`    | 300   | <span style="font-weight: var(--awc-font-weight-light);">The quick brown fox jumped over the lazy dog.</span>    |
| `--awc-font-weight-normal`   | 400   | <span style="font-weight: var(--awc-font-weight-normal);">The quick brown fox jumped over the lazy dog.</span>   |
| `--awc-font-weight-semibold` | 500   | <span style="font-weight: var(--awc-font-weight-semibold);">The quick brown fox jumped over the lazy dog.</span> |
| `--awc-font-weight-bold`     | 700   | <span style="font-weight: var(--awc-font-weight-bold);">The quick brown fox jumped over the lazy dog.</span>     |

## Letter Spacing

| Token                         | Value    | Example                                                                                                              |
|-------------------------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `--awc-letter-spacing-denser` | -0.03em  | <span style="letter-spacing: var(--awc-letter-spacing-denser);">The quick brown fox jumped over the lazy dog.</span> |
| `--awc-letter-spacing-dense`  | -0.015em | <span style="letter-spacing: var(--awc-letter-spacing-dense);">The quick brown fox jumped over the lazy dog.</span>  |
| `--awc-letter-spacing-normal` | normal   | <span style="letter-spacing: var(--awc-letter-spacing-normal);">The quick brown fox jumped over the lazy dog.</span> |
| `--awc-letter-spacing-loose`  | 0.075em  | <span style="letter-spacing: var(--awc-letter-spacing-loose);">The quick brown fox jumped over the lazy dog.</span>  |
| `--awc-letter-spacing-looser` | 0.15em   | <span style="letter-spacing: var(--awc-letter-spacing-looser);">The quick brown fox jumped over the lazy dog.</span> |

## Line Height

| Token                      | Value | Example                                                                                                                                                                                                        |
|----------------------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `--awc-line-height-denser` | 1     | <div style="line-height: var(--awc-line-height-denser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--awc-line-height-dense`  | 1.4   | <div style="line-height: var(--awc-line-height-dense);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--awc-line-height-normal` | 1.8   | <div style="line-height: var(--awc-line-height-normal);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
| `--awc-line-height-loose`  | 2.2   | <div style="line-height: var(--awc-line-height-loose);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div>  |
| `--awc-line-height-looser` | 2.6   | <div style="line-height: var(--awc-line-height-looser);">The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.<br>The quick brown fox jumped over the lazy dog.</div> |
