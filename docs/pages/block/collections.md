---
meta:
  title: Collections
  description:
layout: blocks
---

## Collection 1

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950  dark:bg-neutral-950py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="mb-6 flex items-center justify-between gap-4">
      <awc-typography type="h2">Collections</awc-typography>
      <awc-button href="#">Show more</awc-button>
    </div>

    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

      <!-- product - start -->
      <awc-card href="#" class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            layout="filled"
            width="600"
            height="700"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?crop=top"
            class="transition duration-200 group-hover:scale-110"></awc-image>
        </div>

        <div class="flex flex-col mt-2">
          <span class="opacity-75">Men</span>
          <a href="#" class="text-lg font-bold transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Business Causual</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            layout="filled"
            width="600"
            height="700"
            src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=top"
            class="transition duration-200 group-hover:scale-110"></awc-image>
        </div>

        <div class="flex flex-col mt-2">
          <span class="opacity-75">Women</span>
          <a href="#" class="text-lg font-bold transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Summer Season</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            layout="filled"
            width="600"
            height="700"
            src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?crop=top"
            class="transition duration-200 group-hover:scale-110"></awc-image>
        </div>
        <div class="flex flex-col mt-2">
          <span class="opacity-75">Men</span>
          <a href="#" class="text-lg font-bold transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Streetwear</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            layout="filled"
            width="600"
            height="700"
            src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?crop=top"
            class="transition duration-200 group-hover:scale-110"></awc-image>
        </div>
        <div class="flex flex-col mt-2">
          <span class="opacity-75">Women</span>
          <a href="#" class="text-lg font-bold transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Sale</a>
        </div>
      </awc-card>
      <!-- product - end -->
    </div>
  </div>
</div>
```

## Collection 2

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950  dark:bg-neutral-950py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center">Collections</awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-6 sm:grid-cols-2">
      <!-- product - start -->
      <awc-card href="#" class="card-image group rounded-lg overflow-hidden h-80 lg:h-96" inner shadow>
        <div slot="image" class="absolute inset-0">
          <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="750"
            src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38"
            class="transition duration-200 group-hover:scale-110"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div class="flex flex-col h-full justify-end">
          <span class="text-neutral-300">Home</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-image group rounded-lg overflow-hidden h-80 lg:h-96" inner shadow>
        <div slot="image" class="absolute inset-0">
          <awc-image
            aspectRatio="1.5"
            layout="filled"
            width="750"
            src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9"
            class="transition duration-200 group-hover:scale-110"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div class="flex flex-col h-full justify-end">
          <span class="text-neutral-300">Modern</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Furniture</span>
        </div>
      </awc-card>
      <!-- product - end -->
    </div>
  </div>
</div>
```

## Collection 3

```html:preview:tailwind:no-resizer
<div class="bg-white dark:bg-neutral-950  dark:bg-neutral-950py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <awc-typography type="h2" class="text-center mb-8">Collections</awc-typography>

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      <!-- product - start -->
      <awc-card href="#" class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          layout="filled"
          width="600"
          height="700"
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?crop=top"
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-col h-full justify-end">
          <div class="flex flex-col w-full p-2 mt-2 rounded-lg bg-white dark:bg-black items-center">
            <span class="opacity-75 text-black dark:text-white">Men</span>
            <a href="#" class="text-lg text-center font-bold text-black dark:text-white transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Business Causual</a>
          </div>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          layout="filled"
          width="600"
          height="700"
          src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?crop=top"
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-col h-full justify-end">
          <div class="flex flex-col w-full p-2 mt-2 rounded-lg bg-white dark:bg-black items-center">
            <span class="opacity-75 text-black dark:text-white">Women</span>
            <a href="#" class="text-lg text-center font-bold text-black dark:text-white transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Summer Season</a>
          </div>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          layout="filled"
          width="600"
          height="700"
          src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?crop=top"
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-col h-full justify-end">
          <div class="flex flex-col w-full p-2 mt-2 rounded-lg bg-white dark:bg-black items-center">
            <span class="opacity-75 text-black dark:text-white">Men</span>
            <a href="#" class="text-lg text-center font-bold text-black dark:text-white transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Streetwear</a>
          </div>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card href="#" class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          layout="filled"
          width="600"
          height="700"
          src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?crop=top"
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-col h-full justify-end">
          <div class="flex flex-col w-full p-2 mt-2 rounded-lg bg-white dark:bg-black items-center">
            <span class="opacity-75 text-black dark:text-white">Women</span>
            <a href="#" class="text-lg text-center font-bold text-black dark:text-white transition duration-100 hover:text-primary dark:group-hover:text-primary lg:text-xl">Sale</a>
          </div>
        </div>
      </awc-card>
      <!-- product - end -->
    </div>
  </div>
</div>
```
