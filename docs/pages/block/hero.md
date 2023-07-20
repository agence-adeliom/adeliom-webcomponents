---
meta:
  title: Hero
  description:
layout: blocks
---

## Hero 1

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <!-- content - start -->
      <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <p class="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

        <p class="mb-8 leading-relaxed md:mb-12 lg:w-4/5 xl:text-lg text-neutral-500 dark:text-neutral-200">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
          <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
        </div>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="h-48 overflow-hidden relative rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
        <awc-image
          aspectRatio="1.3"
          layout="filled"
          width="1000"
          src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e" ></awc-image>
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>
```

## Hero 2

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-neutral-100 py-16 shadow-lg md:py-20 xl:py-48">
      <!-- image - start -->
      <awc-image
        aspectRatio="1.5"
        layout="inset"
        width="1500"
        src="https://images.unsplash.com/photo-1618004652321-13a63e576b80" ></awc-image>
      <!-- image - end -->

      <!-- overlay - start -->
      <div class="absolute inset-0 bg-neutral-600 mix-blend-multiply"></div>
      <!-- overlay - end -->

      <!-- text start -->
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p class="mb-4 text-center font-semibold text-lg text-primary sm:text-xl md:mb-8">Very proud to introduce</p>
        <awc-typography type="h2" class="mb-8 md:mb-12 text-white text-center" noMargin >Revolutionary way to build the web</awc-typography>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
          <awc-button href="#" variant="ghost" class="text-white" size="large">Take tour</awc-button>
        </div>
      </div>
      <!-- text end -->
    </section>
  </div>
</div>
```

## Hero 3

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <!-- content - start -->
      <div class="flex flex-col justify-between xl:w-5/12">
        <div></div>

        <div class="sm:text-center lg:py-12 lg:text-left xl:py-24">
          <p class="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

          <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

          <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
            <awc-button href="#" variant="primary" size="large">Start now</awc-button>
            <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
          </div>
        </div>

        <!-- social - start -->
        <div class="mt-8 flex items-center justify-center gap-4 sm:mt-16 lg:justify-start">
          <span class="text-sm font-semibold uppercase tracking-widest text-neutral-400 sm:text-base">Social</span>
          <span class="h-px w-12 bg-neutral-200"></span>

          <div class="flex gap-4 text-xl leading-none">
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="instagram"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="facebook"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="linkedin"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
              <awc-icon name="twitter"></awc-icon>
            </a>
          </div>
        </div>
        <!-- social - end -->
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
        <awc-image
          aspectRatio="1.5"
          layout="filled"
          width="1000"
          src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead" ></awc-image>
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>
```

## Hero 4

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="flex flex-col items-center">
      <div class="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
        <p class="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <awc-typography type="h2" class="mb-8 md:mb-12 text-center" noMargin >Revolutionary way to build the web</awc-typography>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
          <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
        </div>
      </div>

      <!-- social - start -->
      <div class="flex items-center justify-center gap-4 lg:justify-start">
        <span class="text-sm font-semibold uppercase tracking-widest text-neutral-400 sm:text-base">Social</span>
        <span class="h-px w-12 bg-neutral-200"></span>

        <div class="flex gap-4 text-xl leading-none">
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
      </div>
      <!-- social - end -->
    </section>
  </div>
</div>
```

## Hero 5

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <!-- content - start -->
      <div class="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

        <p class="mb-8 leading-relaxed text-neutral-500 dark:text-neutral-200 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

        <form class="flex w-full gap-2 md:max-w-md">
          <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
          <awc-button variant="primary">Sign up</awc-button>
        </form>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-auto xl:w-5/12">
        <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1620206343767-7da98185edd4" ></awc-image>
      </div>
      <!-- image - end -->
    </section>
  </div>
</div>
```

## Hero 6

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
      <!-- content - start -->
      <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
        <p class="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
          <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
        </div>
      </div>
      <!-- content - end -->

      <!-- image - start -->
      <div class="h-48 overflow-hidden rounded-lg bg-neutral-100 shadow-lg lg:h-96 xl:w-5/12">
        <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="1000"
            src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191"
            class="w-full h-full"></awc-image>
      </div>
      <!-- image - end -->
    </section>

    <section class="flex flex-col items-center justify-between gap-10 border-t pt-8 lg:flex-row lg:gap-8">
      <!-- stats - start -->
      <div class="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x">
        <div class="px-6 md:px-8">
          <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">200</span>
          <span class="block text-center text-sm font-semibold opacity-75 md:text-left md:text-base">People</span>
        </div>

        <div class="px-6 md:px-8">
          <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">500+</span>
          <span class="block text-center text-sm font-semibold opacity-75 md:text-left md:text-base">Projects</span>
        </div>

        <div class="px-6 md:px-8">
          <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">250+</span>
          <span class="block text-center text-sm font-semibold opacity-75 md:text-left md:text-base">Customers</span>
        </div>

        <div class="px-6 md:px-8">
          <span class="block text-center text-lg font-bold text-primary md:text-left md:text-xl">A couple</span>
          <span class="block text-center text-sm font-semibold opacity-75 md:text-left md:text-base">Coffee breaks</span>
        </div>
      </div>
      <!-- stats - end -->

      <!-- social - start -->
      <div class="flex items-center justify-center gap-4 lg:justify-start">
        <span class="text-sm font-semibold uppercase tracking-widest text-neutral-400 sm:text-base">Social</span>
        <span class="h-px w-12 bg-neutral-200"></span>

        <div class="flex gap-4 text-xl leading-none">
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
      </div>
      <!-- social - end -->
    </section>
  </div>
</div>
```

## Hero 7

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <div class="container mx-auto px-4 md:px-8">
    <section class="flex flex-col items-center">
      <div class="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
        <p class="mb-4 font-semibold text-primary md:mb-6 md:text-lg xl:text-xl">Very proud to introduce</p>

        <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

        <p class="mb-8 leading-relaxed text-neutral-500 dark:text-neutral-200 md:mb-12 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
          <awc-button href="#" variant="primary" size="large">Start now</awc-button>
          <awc-button href="#" variant="ghost" size="large">Take tour</awc-button>
        </div>
      </div>
    </section>
  </div>
</div>
```

## Hero 8

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950 pt-4 pb-6 sm:pb-8 lg:pb-12">
  <section class="container mx-auto px-4 md:px-8">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <awc-typography type="h2" class="mb-8 md:mb-12" noMargin >Revolutionary way to build the web</awc-typography>

        <p class="max-w-md leading-relaxed text-neutral-500 dark:text-neutral-200 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares characteristics of real text.</p>
      </div>

      <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-neutral-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <awc-image
            aspectRatio="1"
            layout="filled"
            width="600"
            src="https://images.unsplash.com/photo-1542340916-951bb72c8f74"
            class="w-full h-full"></awc-image>
        </div>

        <div class="overflow-hidden rounded-lg bg-neutral-100 shadow-lg">
          <awc-image
            aspectRatio="1"
            layout="filled"
            width="600"
            src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f"
            class="w-full h-full"></awc-image>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
      <!-- social - start -->
      <div class="flex items-center justify-center gap-4 lg:justify-start">
        <span class="text-sm font-semibold uppercase tracking-widest text-neutral-400 sm:text-base">Social</span>
        <span class="h-px w-12 bg-neutral-200"></span>

        <div class="flex gap-4 text-xl leading-none">
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-neutral-400 transition duration-100 hover:text-neutral-500 active:text-neutral-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
      </div>
      <!-- social - end -->
    </div>
  </section>
</div>
```
