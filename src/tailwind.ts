export default {
  darkMode: ['class', '.awc-theme-dark'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        current: 'currentColor',
        transparent: 'var(--awc-color-transparent)',
        background: 'var(--awc-background-color)',
        neutral: {
          0: 'var(--awc-color-neutral-0)',
          50: 'var(--awc-color-neutral-50)',
          100: 'var(--awc-color-neutral-100)',
          200: 'var(--awc-color-neutral-200)',
          300: 'var(--awc-color-neutral-300)',
          400: 'var(--awc-color-neutral-400)',
          500: 'var(--awc-color-neutral-500)',
          600: 'var(--awc-color-neutral-600)',
          700: 'var(--awc-color-neutral-700)',
          800: 'var(--awc-color-neutral-800)',
          900: 'var(--awc-color-neutral-900)',
          950: 'var(--awc-color-neutral-950)',
          1000: 'var(--awc-color-neutral-1000)'
        },
        primary: {
          50: 'var(--awc-color-primary-50)',
          200: 'var(--awc-color-primary-200)',
          400: 'var(--awc-color-primary-400)',
          600: 'var(--awc-color-primary-600)',
          800: 'var(--awc-color-primary-800)',
          950: 'var(--awc-color-primary-950)',
          DEFAULT: 'var(--awc-color-primary-600)'
        },
        secondary: {
          50: 'var(--awc-color-secondary-50)',
          200: 'var(--awc-color-secondary-200)',
          400: 'var(--awc-color-secondary-400)',
          600: 'var(--awc-color-secondary-600)',
          800: 'var(--awc-color-secondary-800)',
          950: 'var(--awc-color-secondary-950)',
          DEFAULT: 'var(--awc-color-secondary-600)'
        },
        tertiary: {
          50: 'var(--awc-color-tertiary-50)',
          200: 'var(--awc-color-tertiary-200)',
          400: 'var(--awc-color-tertiary-400)',
          600: 'var(--awc-color-tertiary-600)',
          800: 'var(--awc-color-tertiary-800)',
          950: 'var(--awc-color-tertiary-950)',
          DEFAULT: 'var(--awc-color-tertiary-600)'
        },
        success: {
          50: 'var(--awc-color-success-50)',
          200: 'var(--awc-color-success-200)',
          400: 'var(--awc-color-success-400)',
          600: 'var(--awc-color-success-600)',
          800: 'var(--awc-color-success-800)',
          950: 'var(--awc-color-success-950)',
          DEFAULT: 'var(--awc-color-success-600)'
        },
        warning: {
          50: 'var(--awc-color-warning-50)',
          200: 'var(--awc-color-warning-200)',
          400: 'var(--awc-color-warning-400)',
          600: 'var(--awc-color-warning-600)',
          800: 'var(--awc-color-warning-800)',
          950: 'var(--awc-color-warning-950)',
          DEFAULT: 'var(--awc-color-warning-600)'
        },
        danger: {
          50: 'var(--awc-color-danger-50)',
          200: 'var(--awc-color-danger-200)',
          400: 'var(--awc-color-danger-400)',
          600: 'var(--awc-color-danger-600)',
          800: 'var(--awc-color-danger-800)',
          950: 'var(--awc-color-danger-950)',
          DEFAULT: 'var(--awc-color-danger-600)'
        },
        gray: {
          50: 'var(--awc-color-gray-50)',
          100: 'var(--awc-color-gray-100)',
          200: 'var(--awc-color-gray-200)',
          300: 'var(--awc-color-gray-300)',
          400: 'var(--awc-color-gray-400)',
          500: 'var(--awc-color-gray-500)',
          600: 'var(--awc-color-gray-600)',
          700: 'var(--awc-color-gray-700)',
          800: 'var(--awc-color-gray-800)',
          900: 'var(--awc-color-gray-900)',
          950: 'var(--awc-color-gray-950)'
        },
        white: {
          light: 'var(--awc-color-neutral-0)',
          dark: 'var(--awc-color-neutral-1000)',
          DEFAULT: 'var(--awc-color-neutral-0)'
        },
        black: {
          light: 'var(--awc-color-neutral-1000)',
          dark: 'var(--awc-color-neutral-0)',
          DEFAULT: 'var(--awc-color-neutral-1000)'
        },
        title: 'var(--awc-text-title-color)',
        paragraph: 'var(--awc-text-paragraph-color)'
      },
      spacing: {
        '3xsmall': 'var(--awc-spacing-3xsmall)',
        '2xsmall': 'var(--awc-spacing-2xsmall)',
        xsmall: 'var(--awc-spacing-xsmall)',
        small: 'var(--awc-spacing-small)',
        medium: 'var(--awc-spacing-medium)',
        large: 'var(--awc-spacing-large)',
        xlarge: 'var(--awc-spacing-xlarge)',
        '2xlarge': 'var(--awc-spacing-2xlarge)',
        '3xlarge': 'var(--awc-spacing-3xlarge)',
        '4xlarge': 'var(--awc-spacing-4xlarge)',
        '5xlarge': 'var(--awc-spacing-5xlarge)',
        '6xlarge': 'var(--awc-spacing-6xlarge)',
        '7xlarge': 'var(--awc-spacing-7xlarge)',
        'vertical-block': 'var(--awc-spacing-vertical-block)',
        'text-image': 'var(--awc-spacing-text-image)',
        'headline-title': 'var(--awc-spacing-headline-title)',
        'title-text': 'var(--awc-spacing-title-text)',
        'button-text': 'var(--awc-spacing-button-text)',
        'button-button': 'var(--awc-spacing-button-button)'
      },
      boxShadow: {
        xsmall: 'var(--awc-shadow-xsmall)',
        small: 'var(--awc-shadow-small)',
        medium: 'var(--awc-shadow-medium)',
        large: 'var(--awc-shadow-large)',
        xlarge: 'var(--awc-shadow-xlarge)'
      },
      borderRadius: {
        small: 'var(--awc-border-radius-small)',
        medium: 'var(--awc-border-radius-medium)',
        large: 'var(--awc-border-radius-large)',
        xlarge: 'var(--awc-border-radius-xlarge)',
        circle: 'var(--awc-border-radius-circle)',
        pill: 'var(--awc-border-radius-pill)'
      },
      transitionDuration: {
        xslow: 'var(--awc-transition-xslow)',
        slow: 'var(--awc-transition-slow)',
        medium: 'var(--awc-transition-medium)',
        fast: 'var(--awc-transition-fast)',
        xfast: 'var(--awc-transition-xfast)'
      },
      zIndex: {
        drawer: 'var(--awc-z-index-drawer)',
        dialog: 'var(--awc-z-index-dialog)',
        dropdown: 'var(--awc-z-index-dropdown)',
        'alert-group': 'var(--awc-z-index-alert-group)',
        tooltip: 'var(--awc-z-index-tooltip)'
      }
    },
    lineHeight: {
      looser: 'var(--awc-line-height-looser)',
      loose: 'var(--awc-line-height-loose)',
      normal: 'var(--awc-line-height-normal)',
      dense: 'var(--awc-line-height-dense)',
      denser: 'var(--awc-line-height-denser)'
    },
    fontFamily: {
      heading: 'var(--awc-font-heading)',
      sans: 'var(--awc-font-sans)',
      serif: 'var(--awc-font-serif)',
      mono: 'var(--awc-font-mono)'
    },
    fontSize: {
      heading1: 'var(--awc-font-size-heading-1)',
      heading2: 'var(--awc-font-size-heading-2)',
      heading3: 'var(--awc-font-size-heading-3)',
      heading4: 'var(--awc-font-size-heading-4)',
      heading5: 'var(--awc-font-size-heading-5)',
      heading6: 'var(--awc-font-size-heading-6)',
      '2xsmall': 'var(--awc-font-size-2xsmall)',
      xsmall: 'var(--awc-font-size-xsmall)',
      small: 'var(--awc-font-size-small)',
      medium: 'var(--awc-font-size-medium)',
      large: 'var(--awc-font-size-large)',
      xlarge: 'var(--awc-font-size-xlarge)',
      '2xlarge': 'var(--awc-font-size-2xlarge)',
      '3xlarge': 'var(--awc-font-size-3xlarge)',
      '4xlarge': 'var(--awc-font-size-4xlarge)',
      '5xlarge': 'var(--awc-font-size-5xlarge)',
      '6xlarge': 'var(--awc-font-size-6xlarge)',
      '7xlarge': 'var(--awc-font-size-7xlarge)',
      '8xlarge': 'var(--awc-font-size-8xlarge)',
      '9xlarge': 'var(--awc-font-size-9xlarge)',
      '10xlarge': 'var(--awc-font-size-10xlarge)'
    }
  }
};
