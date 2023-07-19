---
meta:
  title: Footer
  description:
layout: blocks
---

## Footer 1

```html:preview:tailwind:no-resizer
<div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="container mx-auto px-4 md:px-8">
    <div class="mb-16 grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
      <div class="col-span-full lg:col-span-2">
        <!-- logo - start -->
        <div class="mb-4 lg:-mt-2">
          <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
            <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
          </a>
        </div>
        <!-- logo - end -->

        <p class="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        <!-- social - start -->
        <div class="flex gap-4 text-xl">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
        <!-- social - end -->
      </div>

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->
    </div>

    <div class="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present Adeliom. All rights reserved.</div>
  </footer>
</div>
```

## Footer 2

```html:preview:tailwind:no-resizer
<div class="bg-gray-900">
  <footer class="container mx-auto px-4 md:px-8">
    <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
      <div class="col-span-full lg:col-span-2">
        <!-- logo - start -->
        <div class="mb-4 lg:-mt-2">
          <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
            <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
          </a>
        </div>
        <!-- logo - end -->

        <p class="mb-6 text-gray-400 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>

        <!-- social - start -->
        <div class="flex gap-4 text-xl">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
        <!-- social - end -->
      </div>

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Products</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Company</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Support</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Legal</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
          </div>

          <div>
            <a href="#" class="text-gray-400 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->
    </div>

    <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© 2021 - Present Adeliom. All rights reserved.</div>
  </footer>
</div>
```

## Footer 3

```html:preview:tailwind
<footer class="bg-white">
  <div class="pb-16 pt-4 sm:pt-10 lg:pt-12">
    <div class="container mx-auto px-4 md:px-8">
      <div class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
        <div class="col-span-full lg:col-span-2">
          <!-- logo - start -->
          <div class="mb-4 lg:-mt-2">
            <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
              <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
            </a>
          </div>
          <!-- logo - end -->

          <p class="text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
        </div>

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->
      </div>
    </div>
  </div>

  <div class="bg-gray-100">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between gap-4 py-8">
        <span class="text-sm text-gray-400"> © 2021 - Present AWC. All rights reserved. </span>

        <!-- social - start -->
        <div class="flex gap-4 text-xl">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
        <!-- social - end -->
      </div>
    </div>
  </div>
</footer>
```

## Footer 4

```html:preview:tailwind
<footer class="bg-white pb-10 pt-4 sm:py-10 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <div class="grid grid-cols-2 gap-12 border-t pt-10 md:grid-cols-3 lg:grid-cols-3 lg:grid-rows-2 lg:gap-8 lg:pt-12">
      <div class="col-span-full lg:col-span-1 lg:row-span-2">
        <!-- logo - start -->
        <div class="mb-4 lg:-mt-2">
          <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
            <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
          </a>
        </div>
        <!-- logo - end -->

        <p class="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

        <!-- social - start -->
        <div class="flex gap-4 text-xl mb-6">
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="instagram"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="facebook"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="linkedin"></awc-icon>
          </a>
          <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
            <awc-icon name="twitter"></awc-icon>
          </a>
        </div>
        <!-- social - end -->

        <p class="text-sm text-gray-500">© 2021 - Present AWC. All rights reserved.</p>
      </div>

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->

      <!-- nav - start -->
      <div>
        <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

        <nav class="flex flex-col gap-4">
          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
          </div>

          <div>
            <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
          </div>
        </nav>
      </div>
      <!-- nav - end -->
    </div>
  </div>
</footer>
```

## Footer 5

```html:preview:tailwind
<footer class="bg-white">
  <div class="bg-indigo-500 py-6">
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
        <div class="mb-3 text-center md:mb-0 md:text-left">
          <span class="font-bold uppercase tracking-widest text-gray-100">Newsletter</span>
          <p class="text-indigo-200">Subscribe to our newsletter</p>
        </div>

        <form class="flex w-full gap-2 md:max-w-md">
          <awc-input type="email" placeholder="Email" class="w-full flex-1"></awc-input>
          <awc-button variant="default">Sign up</awc-button>
        </form>
      </div>
    </div>
  </div>

  <div class="pt-12 lg:pt-16">
    <div class="container mx-auto px-4 md:px-8">
      <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
        <div class="col-span-full lg:col-span-2">
          <!-- logo - start -->
          <div class="mb-4 lg:-mt-2">
            <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
              <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
            </a>
          </div>
          <!-- logo - end -->

          <p class="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

          <!-- social - start -->
          <div class="flex gap-4 text-xl">
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="instagram"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="facebook"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="linkedin"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="twitter"></awc-icon>
            </a>
          </div>
          <!-- social - end -->
        </div>

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->
      </div>

      <div class="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present AWC. All rights reserved.</div>
    </div>
  </div>
</footer>
```

## Footer 6

```html:preview:tailwind
<footer class="bg-white pt-4 sm:pt-6 lg:pt-8">
  <div class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col items-center justify-between gap-2 border-b border-t py-6 md:flex-row">
      <div class="mb-3 text-center md:mb-0 md:text-left">
        <span class="font-bold uppercase tracking-widest text-gray-800">Newsletter</span>
        <p class="text-gray-500">Subscribe to our newsletter</p>
      </div>

      <form class="flex w-full gap-2 md:max-w-md">
        <input placeholder="Email" class="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />

        <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
      </form>
    </div>
  </div>

  <div class="pt-12">
    <div class="container mx-auto px-4 md:px-8">
      <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
        <div class="col-span-full lg:col-span-2">
          <!-- logo - start -->
          <div class="mb-4 lg:-mt-2">
            <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl" aria-label="logo">
              <awc-image src="/assets/images/wordmark.svg" width=240></awc-image>
            </a>
          </div>
          <!-- logo - end -->

          <p class="mb-6 text-gray-500 sm:pr-8">Filler text is dummy text which has no meaning however looks very similar to real text</p>

          <!-- social - start -->
          <div class="flex gap-4 text-xl">
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="instagram"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="facebook"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="linkedin"></awc-icon>
            </a>
            <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <awc-icon name="twitter"></awc-icon>
            </a>
          </div>
          <!-- social - end -->
        </div>

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Products</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Overview</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Solutions</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Pricing</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Customers</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Company</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Support</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Contact</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Documentation</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Chat</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">FAQ</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->

        <!-- nav - start -->
        <div>
          <div class="mb-4 font-bold uppercase tracking-widest text-gray-800">Legal</div>

          <nav class="flex flex-col gap-4">
            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Terms of Service</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>
            </div>

            <div>
              <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Cookie settings</a>
            </div>
          </nav>
        </div>
        <!-- nav - end -->
      </div>

      <div class="border-t py-8 text-center text-sm text-gray-400">© 2021 - Present AWC. All rights reserved.</div>
    </div>
  </div>
</footer>
```

## Footer 7

```html:preview:tailwind
<div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">
      <!-- nav - start -->
      <nav class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
      </nav>
      <!-- nav - end -->

      <!-- social - start -->
      <div class="flex gap-4 text-xl">
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="instagram"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="facebook"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="linkedin"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="twitter"></awc-icon>
        </a>
      </div>
      <!-- social - end -->
    </div>

    <div class="py-8 text-center text-sm text-gray-400">© 2021 - Present Adeliom. All rights reserved.</div>
  </footer>
</div>
```

## Footer 8

```html:preview:tailwind
<div class="bg-white pt-4 sm:pt-10 lg:pt-12">
  <footer class="container mx-auto px-4 md:px-8">
    <div class="flex flex-col items-center border-t pt-6">
      <!-- nav - start -->
      <nav class="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">About</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Investor Relations</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Jobs</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Press</a>
        <a href="#" class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">Blog</a>
      </nav>
      <!-- nav - end -->

      <!-- social - start -->
      <div class="flex gap-4 text-xl">
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="instagram"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="facebook"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="linkedin"></awc-icon>
        </a>
        <a href="#" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
          <awc-icon name="twitter"></awc-icon>
        </a>
      </div>
      <!-- social - end -->
    </div>

    <div class="py-8 text-center text-sm text-gray-400">© 2021 - Present Adeliom. All rights reserved.</div>
  </footer>
</div>
```
