---
meta:
  title: Collections
  description:
layout: blocks
---

## Collection 1

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="mb-6 flex items-center justify-between gap-4">
      <awc-typography type="h2">Collections</awc-typography>
      <awc-button href="#">Show more</awc-button>
    </div>

    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">

      <!-- product - start -->
      <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            widht="600"
            height="700"
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
            class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>
        </div>

        <div class="flex flex-col mt-2">
          <span class="text-gray-500">Men</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            widht="600"
            height="700"
            src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60"
            class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>
        </div>

        <div class="flex flex-col mt-2">
          <span class="text-gray-500">Women</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Summer Season</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            widht="600"
            height="700"
            src="https://images.unsplash.com/photo-1552668693-d0738e00eca8"
            class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-gray-500">Men</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Streetwear</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group rounded-lg overflow-hidden" shadow style="--padding: 0">
        <div slot="image" class="h-96 w-full rounded-lg overflow-hidden">
          <awc-image
            slot="image"
            widht="600"
            height="700"
            src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3"
            class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>
        </div>
        <div class="flex flex-col mt-2">
          <span class="text-gray-500">Women</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Sale</a>
        </div>
      </awc-card>
      <!-- product - end -->
    </div>
  </div>
</div>
```

## Collection 2

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center">Collections</awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-6 sm:grid-cols-2">
      <!-- product - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-80" inner shadow>
        <div slot="image">
          <awc-image
            aspectRatio="1"
            layout="inset"
            width="750"
            src="https://images.unsplash.com/photo-1620243318482-fdd2affd7a38"
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div class="flex flex-col self-end">
          <span class="text-gray-300">Home</span>
          <span class="text-lg font-semibold text-white lg:text-xl">Decoration</span>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-80" inner shadow>
        <div slot="image">
          <awc-image
            aspectRatio="1"
            layout="inset"
            width="750"
            src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9"
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div class="flex flex-col self-end">
          <span class="text-gray-300">Modern</span>
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
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <awc-typography type="h2" class="text-center mb-8">Collections</awc-typography>

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      <!-- product - start -->
      <awc-card class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          widht="600"
          height="700"
          src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8"
          class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>

        <div class="flex flex-col self-end w-full p-2 mt-2 rounded-lg bg-white items-center">
          <span class="text-gray-500">Men</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Business Causual</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          widht="600"
          height="700"
          src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60"
          class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>

        <div class="flex flex-col self-end w-full p-2 mt-2 rounded-lg bg-white items-center">
          <span class="text-gray-500">Women</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Summer Season</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          widht="600"
          height="700"
          src="https://images.unsplash.com/photo-1552668693-d0738e00eca8"
          class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>

        <div class="flex flex-col self-end w-full p-2 mt-2 rounded-lg bg-white items-center">
          <span class="text-gray-500">Men</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Streetwear</a>
        </div>
      </awc-card>
      <!-- product - end -->

      <!-- product - start -->
      <awc-card class="card-collection group h-96 rounded-lg overflow-hidden" inner shadow>
        <awc-image
          slot="image"
          widht="600"
          height="700"
          src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3"
          class="transition duration-200 group-hover:scale-110 h-full w-full"></awc-image>

        <div class="flex flex-col self-end w-full p-2 mt-2 rounded-lg bg-white items-center">
          <span class="text-gray-500">Women</span>
          <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Sale</a>
        </div>
      </awc-card>
      <!-- product - end -->
    </div>
  </div>
</div>
```
