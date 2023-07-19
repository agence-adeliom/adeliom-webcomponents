---
meta:
  title: Content
  description:
layout: blocks
---

## Content 1

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      <div>
        <div class="relative h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
          <awc-image
            layout="fullWidth"
            aspectRatio="0.8"
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c"
            class="w-full h-full"></awc-image>
        </div>
      </div>

      <awc-typography class="md:pt-8">
        <p class="text-center font-bold text-indigo-500 md:text-left">Who we are</p>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">Our competitive advantage</h1>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.<br /><br />

          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is <a href="#" class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700">random</a> or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.
        </p>

        <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">About us</h2>

        <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p>
      </awc-typography>
    </div>
  </div>
</div>
```
