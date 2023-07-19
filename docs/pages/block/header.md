---
meta:
  title: Header
  description:
layout: blocks
---

## Header 1

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="flex items-center justify-between py-4 md:py-8">
      <!-- logo - start -->
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Flowrift
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class="hidden gap-12 lg:flex">
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">Home</a>
        <a href="#" class="inline-flex items-center gap-1 text-lg font-semibold text-primary">
          Features

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">Pricing</a>
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">About</a>
      </nav>
      <!-- nav - end -->

      <!-- buttons - start -->
      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <a href="#" class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-neutral-500 outline-none ring-primary-300 transition duration-100 hover:text-primary focus-visible:ring active:text-primary-600 md:text-base">Sign in</a>

        <a href="#" class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Sign up</a>
      </div>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-neutral-200 px-2.5 py-2 text-sm font-semibold text-neutral-500 ring-primary-300 hover:bg-neutral-300 focus-visible:ring active:text-neutral-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      <!-- buttons - end -->
    </header>

    <!-- menu - start -->
    <div class="mx-auto -mt-4 hidden w-full max-w-screen-sm overflow-hidden rounded-lg border bg-white shadow-sm lg:block">
      <div class="m-6 mb-10 grid grid-cols-2 gap-8">
        <!-- link - start -->
        <a href="#" class="group flex gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>

          <div>
            <div class="mb-1 font-semibold">Growth</div>
            <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
        </a>
        <!-- link - end -->

        <!-- link - start -->
        <a href="#" class="group flex gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <div>
            <div class="mb-1 font-semibold">Security</div>
            <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
        </a>
        <!-- link - end -->

        <!-- link - start -->
        <a href="#" class="group flex gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>

          <div>
            <div class="mb-1 font-semibold">Cloud</div>
            <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
        </a>
        <!-- link - end -->

        <!-- link - start -->
        <a href="#" class="group flex gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>

          <div>
            <div class="mb-1 font-semibold">Analytics</div>
            <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
          </div>
        </a>
        <!-- link - end -->
      </div>

      <!-- link - start -->
      <a href="#" class="block bg-neutral-50 p-4 transition duration-100 hover:bg-neutral-100 active:bg-neutral-200">
        <div class="mb-1 flex items-center gap-1.5">
          <span class="font-semibold leading-none">Enterprise solutions</span>
          <span class="mt-0.5 rounded-full bg-primary-100 px-2 py-1 text-xs font-semibold leading-none text-primary-800">New</span>
        </div>

        <p class="text-sm text-neutral-500">This is a section of some simple filler text.</p>
      </a>
      <!-- link - end -->
    </div>
    <!-- menu - end -->
  </div>
</div>
```

## Header 2

```html:preview:tailwind:no-resizer
<div class="bg-white  dark:bg-neutral-950 lg:pb-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <header class="flex items-center justify-between py-4 md:py-8">
      <!-- logo - start -->
      <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
        <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M96 0V47L48 94H0V47L48 0H96Z" />
        </svg>

        Flowrift
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class="hidden gap-12 lg:flex">
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">Home</a>
        <a href="#" class="inline-flex items-center gap-1 text-lg font-semibold text-primary">
          Features

          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-neutral-800" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">Pricing</a>
        <a href="#" class="text-lg font-semibold text-neutral-600 transition duration-100 hover:text-primary active:text-primary-700">About</a>
      </nav>
      <!-- nav - end -->

      <!-- buttons - start -->
      <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
        <a href="#" class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-neutral-500 outline-none ring-primary-300 transition duration-100 hover:text-primary focus-visible:ring active:text-primary-600 md:text-base">Sign in</a>

        <a href="#" class="inline-block rounded-lg bg-primary px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-primary-300 transition duration-100 hover:bg-primary-600 focus-visible:ring active:bg-primary-700 md:text-base">Sign up</a>
      </div>

      <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-neutral-200 px-2.5 py-2 text-sm font-semibold text-neutral-500 ring-primary-300 hover:bg-neutral-300 focus-visible:ring active:text-neutral-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button>
      <!-- buttons - end -->
    </header>

    <!-- menu - start -->
    <div class="hidden w-full overflow-hidden rounded-lg border bg-neutral-50 shadow-sm lg:block">
      <div class="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
        <div class="grid w-2/3 grid-cols-2 gap-8">
          <!-- link - start -->
          <a href="#" class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div>
              <div class="mb-1 font-semibold">Growth</div>
              <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
            </div>
          </a>
          <!-- link - end -->

          <!-- link - start -->
          <a href="#" class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>

            <div>
              <div class="mb-1 font-semibold">Security</div>
              <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
            </div>
          </a>
          <!-- link - end -->

          <!-- link - start -->
          <a href="#" class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>

            <div>
              <div class="mb-1 font-semibold">Cloud</div>
              <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
            </div>
          </a>
          <!-- link - end -->

          <!-- link - start -->
          <a href="#" class="group flex gap-4">
            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-white shadow-lg transition duration-100 group-hover:bg-primary-600 group-active:bg-primary-700 md:h-12 md:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            </div>

            <div>
              <div class="mb-1 font-semibold">Analytics</div>
              <p class="text-sm text-neutral-500">This is a section of some simple filler text, also known as placeholder text.</p>
            </div>
          </a>
          <!-- link - end -->
        </div>

        <!-- promo - start -->
        <div class="w-1/3 overflow-hidden rounded-lg border">
          <div class="h-48 bg-neutral-100">
            <img src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
          </div>

          <div class="flex items-center justify-between gap-2 bg-white p-3">
            <p class="text-sm text-neutral-500">This is some simple filler text.</p>

            <a href="#" class="inline-block shrink-0 rounded-lg border bg-white px-3 py-1 text-sm font-semibold text-primary outline-none ring-primary-300 transition duration-100 hover:bg-neutral-50 focus-visible:ring active:bg-neutral-100">More</a>
          </div>
        </div>
        <!-- promo - end -->
      </div>
    </div>
    <!-- menu - end -->
  </div>
</div>
```
