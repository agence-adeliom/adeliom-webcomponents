---
meta:
  title: Errors
  description:
layout: blocks
---

## Error 1

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center">
      <!-- logo - start -->
      <a href="/" class="mb-8 inline-flex items-center" aria-label="logo">
        <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
      </a>
      <!-- logo - end -->

      <awc-typography class="mb-4 text-primary" noMargin transform="uppercase" ><strong class="font-semibold">That’s a 404</strong></awc-typography>
      <awc-typography type="h4" renderHas="h1" class="mb-2" noMargin >Page not found</awc-typography>
      <awc-typography class="mb-12 max-w-screen-md text-center" noMargin >The page you’re looking for doesn’t exist.</awc-typography>
      <awc-button variant="neutral" size="large">Go home</awc-button>
    </div>
  </div>
</div>
```

## Error 2

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    <div class="grid gap-8 sm:grid-cols-2">
      <!-- content - start -->
      <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
        <awc-typography class="mb-4 text-primary" noMargin transform="uppercase" ><strong class="font-semibold">Error 404</strong></awc-typography>
        <awc-typography type="h4" renderHas="h1" class="mb-2" noMargin >Page not found</awc-typography>
        <awc-typography class="mb-8 text-center" noMargin >The page you’re looking for doesn’t exist.</awc-typography>

        <awc-button variant="neutral" size="large">Go home</awc-button>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="relative h-80 overflow-hidden rounded-lg shadow-lg md:h-auto">
        <awc-image
          slot="image"
          layout="filled"
          aspectRatio="1"
          width="600"
          src="https://images.unsplash.com/photo-1590642916589-592bca10dfbf"  ></awc-image>
      </div>
      <!-- image - end -->
    </div>
  </div>
</div>
```

## Error 3

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-0">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12">
      <!-- image - start -->
      <div class="h-80 overflow-hidden rounded-lg shadow-lg sm:rounded-none sm:shadow-none md:h-auto">
        <awc-image
          slot="image"
          layout="filled"
          aspectRatio="1"
          width="600"
          src="https://images.unsplash.com/photo-1452022449339-59005948ec5b" ></awc-image>
      </div>
      <!-- image - end -->

      <!-- content - start -->
      <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32 xl:py-64">
        <awc-typography class="mb-4 text-primary" noMargin transform="uppercase" ><strong class="font-semibold">Error 404</strong></awc-typography>
        <awc-typography type="h4" renderHas="h1" class="mb-2" noMargin >Page not found</awc-typography>
        <awc-typography class="mb-8 text-center" noMargin >The page you’re looking for doesn’t exist.</awc-typography>

        <awc-button variant="neutral" size="large">Go home</awc-button>
      </div>
      <!-- content - end -->
    </div>
  </div>
</div>
```

## Error 4

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="relative mx-auto flex h-96 w-full items-center justify-center overflow-hidden rounded-lg shadow-lg sm:w-96">
      <awc-image
          slot="image"
          layout="inset"
          aspectRatio="1"
          width="600"
          src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f" ></awc-image>

      <!-- content - start -->
      <div class="relative flex flex-col items-center justify-center p-8 md:p-16">
        <awc-typography type="h3" class="mb-2 text-center" noMargin transform="uppercase" ><strong class="font-bold">404</strong></awc-typography>
        <awc-typography class="mb-8 text-center text-neutral-200" noMargin >The page you’re looking for doesn’t exist.</awc-typography>

        <awc-button variant="default" size="large">Go home</awc-button>
      </div>
      <!-- content - end -->
    </div>
  </div>
</div>
```

## Error 5

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-lg px-4 md:px-8">
    <div class="grid gap-8 sm:grid-cols-2">
      <!-- image - start -->
      <div class="h-80 overflow-hidden rounded-lg shadow-lg md:h-auto">
        <awc-image
          slot="image"
          layout="filled"
          aspectRatio="1"
          width="600"
          src="https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2" ></awc-image>
      </div>
      <!-- image - end -->

      <!-- content - start -->
      <div class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
        <awc-typography class="mb-4 text-primary" noMargin transform="uppercase" ><strong class="font-semibold">Error 404</strong></awc-typography>
        <awc-typography type="h4" renderHas="h1" class="mb-2" noMargin >Page not found</awc-typography>
        <awc-typography class="mb-4 text-center" noMargin >The page you’re looking for doesn’t exist.</awc-typography>

        <awc-button-group>
          <awc-button href="#" variant="neutral" >Home</awc-button>
          <awc-button href="#" variant="neutral" >Search</awc-button>
          <awc-button href="#" variant="neutral" >Help</awc-button>
        </awc-button-group>
      </div>
      <!-- content - end -->
    </div>
  </div>
</div>
```
