---
meta:
  title: Newsletter
  description:
layout: blocks
---

## Newsletter 1

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="flex overflow-hidden rounded-lg bg-neutral-100">
      <!-- image - start -->
      <div class="relative hidden bg-neutral-200 sm:block sm:w-1/3 lg:w-1/2">
        <img src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750" loading="lazy" alt="Photo by mymind" class="absolute inset-0 h-full w-full object-cover object-center" />
      </div>
      <!-- image - end -->

      <!-- content - start -->
      <div class="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
        <div class="flex w-full flex-col items-center sm:block">
          <div class="mb-4 sm:mb-8">
            <h2 class="text-center text-xl font-bold text-primary sm:text-left sm:text-2xl lg:text-3xl">Get the latest updates</h2>
            <p class="text-center text-neutral-500 sm:text-left">Sign up for our newsletter</p>
          </div>

          <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
            <input placeholder="Email" class="bg-neutral-white w-full flex-1 rounded border border-neutral-300 px-3 py-2 text-neutral-800 placeholder-neutral-400 outline-none ring-primary-300 transition duration-100 focus:ring" />

            <button class="inline-block rounded bg-primary px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Send</button>
          </form>

          <p class="text-center text-xs text-neutral-400 sm:text-left">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>.</p>
        </div>
      </div>
      <!-- content - end -->
    </div>
  </div>
</div>
```

## Newsletter 2

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col items-center rounded-lg bg-neutral-100 p-4 sm:p-8">
      <div class="mb-4 sm:mb-8">
        <h2 class="text-center text-xl font-bold text-primary sm:text-2xl lg:text-3xl">Get the latest updates</h2>
        <p class="text-center text-neutral-500">Sign up for our newsletter</p>
      </div>

      <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
        <input placeholder="Email" class="bg-neutral-white w-full flex-1 rounded border border-neutral-300 px-3 py-2 text-neutral-800 placeholder-neutral-400 outline-none ring-primary-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-primary px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Send</button>
      </form>

      <p class="text-center text-xs text-neutral-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>.</p>
    </div>
  </div>
</div>
```

## Newsletter 3

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col items-center rounded-lg bg-neutral-100 p-4 sm:p-8 lg:flex-row lg:justify-between">
      <div class="mb-4 sm:mb-8 lg:mb-0">
        <h2 class="text-center text-xl font-bold text-primary sm:text-2xl lg:text-left lg:text-3xl">Get the latest updates</h2>
        <p class="text-center text-neutral-500 lg:text-left">Sign up for our newsletter</p>
      </div>

      <div class="flex flex-col items-center lg:items-end">
        <form class="mb-3 flex w-full max-w-md gap-2">
          <input placeholder="Email" class="bg-neutral-white w-full flex-1 rounded border border-neutral-300 px-3 py-2 text-neutral-800 placeholder-neutral-400 outline-none ring-primary-300 transition duration-100 focus:ring" />

          <button class="inline-block rounded bg-primary px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Send</button>
        </form>

        <p class="text-center text-xs text-neutral-400 lg:text-right">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-primary active:text-primary-600">Privacy Policy</a>.</p>
      </div>
    </div>
  </div>
</div>
```
