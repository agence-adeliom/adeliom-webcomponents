---
meta:
  title: FAQ
  description:
layout: blocks
---

## FAQ 1

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Frequently asked questions
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">
      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="relative rounded-lg bg-neutral-100 dark:bg-neutral-700" style="--padding: 2rem 1.25rem 0">
        <span class="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-2xl">
          <awc-icon name="question"></awc-icon>
        </span>
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->
    </div>
  </div>
</div>
```

## FAQ 2

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Frequently asked questions
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="faq-group mx-auto flex max-w-screen-sm flex-col border-t">

      <!-- question - start -->
      <awc-details class="faq-detail border-b">
        <awc-icon class="text-primary text-2xl" slot="expand-icon" name="chevron-down"></awc-icon>
        <awc-icon class="text-primary text-2xl" slot="collapse-icon" name="chevron-up"></awc-icon>

        <awc-typography type="h6" class="hover:text-primary active:text-primary-600 transition duration-100 py-4" slot="summary" noMargin >
          How does the product work?
        </awc-typography>

        <awc-typography class="mb-4 text-neutral-500 dark:text-neutral-200" noMargin >
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.
        </awc-typography>
      </awc-details>
      <!-- question - end -->

      <!-- question - start -->
      <awc-details class="faq-detail border-b">
        <awc-icon class="text-primary text-2xl" slot="expand-icon" name="chevron-down"></awc-icon>
        <awc-icon class="text-primary text-2xl" slot="collapse-icon" name="chevron-up"></awc-icon>

        <awc-typography type="h6" class="hover:text-primary active:text-primary-600 transition duration-100 py-4" slot="summary" noMargin >
          How does the product work?
        </awc-typography>

        <awc-typography class="mb-4 text-neutral-500 dark:text-neutral-200" noMargin >
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.
        </awc-typography>
      </awc-details>
      <!-- question - end -->

      <!-- question - start -->
      <awc-details class="faq-detail border-b">
        <awc-icon class="text-primary text-2xl" slot="expand-icon" name="chevron-down"></awc-icon>
        <awc-icon class="text-primary text-2xl" slot="collapse-icon" name="chevron-up"></awc-icon>

        <awc-typography type="h6" class="hover:text-primary active:text-primary-600 transition duration-100 py-4" slot="summary" noMargin >
          How does the product work?
        </awc-typography>

        <awc-typography class="mb-4 text-neutral-500 dark:text-neutral-200" noMargin >
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.
        </awc-typography>
      </awc-details>
      <!-- question - end -->

      <!-- question - start -->
      <awc-details class="faq-detail border-b">
        <awc-icon class="text-primary text-2xl" slot="expand-icon" name="chevron-down"></awc-icon>
        <awc-icon class="text-primary text-2xl" slot="collapse-icon" name="chevron-up"></awc-icon>

        <awc-typography type="h6" class="hover:text-primary active:text-primary-600 transition duration-100 py-4" slot="summary" noMargin >
          How does the product work?
        </awc-typography>

        <awc-typography class="mb-4 text-neutral-500 dark:text-neutral-200" noMargin >
          This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing.
        </awc-typography>
      </awc-details>
      <!-- question - end -->
    </div>
  </div>
</div>

<script>
  const container = document.querySelector('.faq-group');

  // Close all other details when one is shown
  container.addEventListener('awc-show', event => {
    [...container.querySelectorAll('awc-details')].map(details => (details.open = event.target === details));
  });
</script>

<style>
  awc-details.faq-detail::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

## FAQ 3

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Frequently asked questions
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-x-8 gap-y-6 sm:grid-cols-2 md:gap-x-12 md:gap-y-10 xl:grid-cols-3 xl:gap-x-16 xl:gap-y-12">
      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card style="--padding: 0">
        <awc-typography type="h6" renderHas="h3" class="mb-3 text-primary" noMargin >How does the product work?</awc-typography>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->
    </div>
  </div>
</div>
```

## FAQ 4

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="mb-4 text-center" noMargin >
        Frequently asked questions
      </awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center text-neutral-500 dark:text-neutral-200 md:block" noMargin >
        This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
      </awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-8">

      <!-- question - start -->
      <awc-card class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5" style="--padding: 0">
        <div slot="header" class="border-b flex items-center justify-between pb-3">
          <awc-typography type="h6" renderHas="h3" class="text-primary" noMargin >How does the product work?</awc-typography>
          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl">
            <awc-icon name="question"></awc-icon>
          </span>
        </div>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5" style="--padding: 0">
        <div slot="header" class="border-b flex items-center justify-between pb-3">
          <awc-typography type="h6" renderHas="h3" class="text-primary" noMargin >How does the product work?</awc-typography>
          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl">
            <awc-icon name="question"></awc-icon>
          </span>
        </div>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5" style="--padding: 0">
        <div slot="header" class="border-b flex items-center justify-between pb-3">
          <awc-typography type="h6" renderHas="h3" class="text-primary" noMargin >How does the product work?</awc-typography>
          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl">
            <awc-icon name="question"></awc-icon>
          </span>
        </div>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->

      <!-- question - start -->
      <awc-card class="rounded-lg bg-neutral-100 dark:bg-neutral-700 p-5" style="--padding: 0">
        <div slot="header" class="border-b flex items-center justify-between pb-3">
          <awc-typography type="h6" renderHas="h3" class="text-primary" noMargin >How does the product work?</awc-typography>
          <span class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-300 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200 text-2xl">
            <awc-icon name="question"></awc-icon>
          </span>
        </div>
        <awc-typography class="text-neutral-500 dark:text-neutral-200" >This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</awc-typography>
      </awc-card>
      <!-- question - end -->
    </div>
  </div>
</div>
```
