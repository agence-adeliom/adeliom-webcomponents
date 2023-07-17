---
meta:
  title: Banner
  description:
layout: blocks
---

## Banner 1

```html:preview:tailwind:no-resizer
<div class="bg-white pb-6 sm:pb-8 lg:pb-12">
  <!-- banner - start -->
  <div class="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
    <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a section of some simple filler text, also known as placeholder text.</div>

    <awc-button href="#" variant="primary" class="order-last">Learn more</awc-button>

    <!-- close button - start -->
    <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
        <awc-button type="button" variant="text">
          <awc-icon name="x-lg" class="text-white"></awc-icon>
        </awc-button>
    </div>
    <!-- close button - end -->
  </div>
  <!-- banner - end -->
</div>
```

## Banner 2

```html:preview:tailwind:no-resizer
<div class="bg-white pt-6 sm:pt-8 lg:pt-12">
  <!-- banner - start -->
  <div class="container mx-auto px-4 pb-4 md:px-8">
    <div class="relative flex flex-wrap rounded-lg bg-indigo-500 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
      <div class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">This is a section of some simple filler text, also known as placeholder text.</div>

     <awc-button href="#" variant="primary" class="order-last">Learn more</awc-button>


      <!-- close button - start -->
      <div class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3">
        <awc-button type="button" variant="text">
          <awc-icon name="x-lg" class="text-white"></awc-icon>
        </awc-button>
      </div>
      <!-- close button - end -->
    </div>
  </div>
  <!-- banner - end -->
</div>
```
