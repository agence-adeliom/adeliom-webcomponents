---
meta:
  title: Features
  description:
layout: blocks
---

## Features 1

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Our competitive advantage
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-gray-500 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="feature-1 grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Growth</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="lock" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Security</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="cloudy" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Cloud</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="lightning-charge-fill" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Speed</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="life-preserver" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Support</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none" horizontal>
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="moon" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Dark Mode</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

    </div>
  </div>
</div>

<style>
  .feature-1 awc-card {
    --padding: 0;
    text-align: center;
  }

  .feature-1 awc-card::part(image) {
    margin: 0 auto 1rem;
  }

  .feature-1 awc-card awc-button {
    --awc-button-font-size-medium: var(--awc-font-size-medium)
  }

  @media (min-width: 768px){
    .feature-1 awc-card {
      --padding: 0 0 1rem 1.5rem;
      text-align: left;
    }
  }
</style>
```

## Features 2

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Our competitive advantage
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-gray-500 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="feature-2 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Growth</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="lock" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Security</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="cloudy" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Cloud</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="lightning-charge-fill" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Speed</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="life-preserver" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Support</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <awc-icon name="moon" class="text-3xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Dark Mode</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->
    </div>
  </div>
</div>

<style>
  .feature-2 awc-card {
    --padding: 0;
  }
  .feature-2 awc-card::part(image) {
    margin: 0 auto 1rem;
  }
  .feature-2 awc-card awc-button {
    --awc-button-font-size-medium: var(--awc-font-size-medium)
  }
</style>
```

## Features 3

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Our competitive advantage
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-gray-500 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="feature-3 grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="graph-up-arrow" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Growth</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="lock" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Security</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="cloudy" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Cloud</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="lightning-charge-fill" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Speed</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="life-preserver" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Support</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card class="relative rounded-lg bg-none text-center">
        <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center text-indigo-500 md:h-14 md:w-14">
          <awc-icon name="moon" class="text-5xl"></awc-icon>
        </div>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Dark Mode</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->
    </div>
  </div>
</div>

<style>
  .feature-3 awc-card {
    --padding: 0;
  }
  .feature-3 awc-card::part(image) {
    margin: 0 auto 1rem;
  }
  .feature-3 awc-card awc-button {
    --awc-button-font-size-medium: var(--awc-font-size-medium)
  }
</style>
```

## Features 4

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Our competitive advantage
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-gray-500 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Growth</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Security</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Cloud</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Speed</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Support</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->

      <!-- feature - start -->
      <awc-card bordered>
        <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Dark Mode</awc-typography>
        <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
        <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
      </awc-card>
      <!-- feature - end -->
    </div>
  </div>
</div>
```

## Features 5

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Our competitive advantage
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-gray-500 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="feature-5">
      <awc-carousel navigation loop slides-per-page="3" slides-per-move="1">
        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="graph-up-arrow" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Growth</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->

        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="lock" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Security</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->

        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="cloudy" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Cloud</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->

        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="lightning-charge-fill" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Speed</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->

        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="life-preserver" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Support</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->

        <!-- feature - start -->
        <awc-carousel-item>
          <awc-card class="relative rounded-lg bg-none text-center">
            <div slot="image" class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
              <awc-icon name="moon" class="text-3xl"></awc-icon>
            </div>
            <awc-typography type="h6" renderHas="h3" class="mb-2" noMargin >Dark Mode</awc-typography>
            <awc-typography class="text-gray-500" noMargin>Filler text is dummy text which has no meaning however looks very similar to real text.</awc-typography>
            <awc-button href="#" variant="text" ><strong>More</strong></awc-button>
          </awc-card>
        </awc-carousel-item>
        <!-- feature - end -->
      </awc-carousel>
    </div>
  </div>
</div>

<style>
  .feature-5 awc-card {
    --padding: 0;
  }
  .feature-5 awc-card::part(image) {
    margin: 0 auto 1rem;
  }
  .feature-5 awc-card awc-button {
    --awc-button-font-size-medium: var(--awc-font-size-medium)
  }
</style>
```
