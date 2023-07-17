---
meta:
  title: Banner
  description: 
layout: blocks
---

## Blog 1

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center mb-4">Blog</awc-typography>

      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
      <!-- article - start -->
      <awc-card class="card-image" bordered shadow>
        <awc-image 
          slot="image"
          aspectRatio="1.5"
          layout="constrained"
          width="600"
          src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620" 
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-1 flex-col">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
          </h2>

          <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2">
          <awc-avatar image="https://images.unsplash.com/photo-1611898872015-0571a9e38375?auto=format&q=75&fit=crop&w=64"></awc-avatar>
          <div>
            <span class="block text-indigo-500">Mike Lane</span>
            <span class="block text-sm text-gray-400">July 19, 2021</span>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" bordered shadow>
        <awc-image 
          slot="image"
          aspectRatio="1.5"
          layout="constrained"
          width="600"
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-1 flex-col">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
          </h2>

          <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2">
          <awc-avatar image="https://images.unsplash.com/photo-1586116104126-7b8e839d5b8c?auto=format&q=75&fit=crop&w=64"></awc-avatar>
          <div>
            <span class="block text-indigo-500">Jane Jackobs</span>
                <span class="block text-sm text-gray-400">April 07, 2021</span>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" bordered shadow>
        <awc-image 
          slot="image"
          aspectRatio="1.5"
          layout="constrained"
          width="600"
          src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a" 
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-1 flex-col">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
          </h2>

          <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2">
          <awc-avatar image="https://images.unsplash.com/photo-1592660503155-7599a37f06a6?auto=format&q=75&fit=crop&w=64"></awc-avatar>
          <div>
            <span class="block text-indigo-500">Tylor Grey</span>
            <span class="block text-sm text-gray-400">March 15, 2021</span>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" bordered shadow>
        <awc-image 
          slot="image"
          aspectRatio="1.5"
          layout="constrained"
          width="600"
          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c" 
          class="transition duration-200 group-hover:scale-110"></awc-image>

        <div class="flex flex-1 flex-col">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
          </h2>

          <p class="mb-8 text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2">
          <awc-avatar image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&q=75&fit=crop&w=64"></awc-avatar>
          <div>
            <span class="block text-indigo-500">Ann Park</span>
            <span class="block text-sm text-gray-400">January 27, 2021</span>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->
    </div>
  </div>
</div>
```

## Blog 2

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center mb-4">Blog</awc-typography>

      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">

      <!-- article - start -->
      <awc-card class="card-image" horizontal>
        <div slot="image" class="group relative block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden">
          <awc-image 
            aspectRatio="1"
            layout="inset"
            width="600"
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2 -mt-4">
          <span class="text-sm text-gray-400">July 19, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal>
        <div slot="image" class="group relative block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden">
          <awc-image 
            aspectRatio="1"
            layout="inset"
            width="600"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2 -mt-4">
          <span class="text-sm text-gray-400">April 07, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal>
        <div slot="image" class="group relative block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden">
          <awc-image 
            aspectRatio="1"
            layout="inset"
            width="600"
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2 -mt-4">
          <span class="text-sm text-gray-400">March 15, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal>
        <div slot="image" class="group relative block h-56 w-full shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40 rounded-lg overflow-hidden">
          <awc-image 
            aspectRatio="1"
            layout="inset"
            width="600"
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2 -mt-4">
          <span class="text-sm text-gray-400">January 27, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->
    </div>
  </div>
</div>
```

## Blog 3

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center mb-4">Blog</awc-typography>
      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">

      <!-- article - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
        <div slot="image">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>

        <div class="flex flex-col self-end gap-2">
          <span class="text-sm text-gray-400">July 19, 2021</span>
          <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">New trends in Tech</h2>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->


      <!-- article - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
        <div slot="image">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div class="flex flex-col self-end gap-2">
          <span class="block text-sm text-gray-200">April 07, 2021</span>
          <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">Working with legacy stacks</h2>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
        <div slot="image">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div class="flex flex-col self-end gap-2">
          <span class="block text-sm text-gray-200">March 15, 2021</span>
          <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">10 best smartphones for devs</h2>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image group rounded-lg overflow-hidden h-48 md:h-64 xl:h-96" inner shadow>
        <div slot="image">
        <awc-image 
          aspectRatio="0.75"
          layout="inset"
          width="192"
          src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c" 
          class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div class="flex flex-col self-end gap-2">
          <span class="block text-sm text-gray-200">January 27, 2021</span>
          <h2 class="mb-2 text-xl font-semibold text-white transition duration-100">8 High performance Notebooks</h2>
          <div class="flex items-center gap-2 -mx-4">
            <awc-button href="#" variant="text">Read more</awc-button>
          </div>
        </div>
      </awc-card>
      <!-- article - end -->
    </div>
  </div>
</div>
```

## Blog 4

```html:preview:tailwind:no-resizer
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="container mx-auto px-4 md:px-8">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <awc-typography type="h2" class="text-center mb-4">Blog</awc-typography>

      <awc-typography class="mx-auto max-w-screen-md text-center">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</awc-typography>
    </div>
    <!-- text - end -->

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
      <!-- article - start -->
      <awc-card class="card-image" horizontal bordered shadow>
        <div slot="image" class="group relative block h-48 w-full md:h-full md:w-32 lg:w-48">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="600"
            src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">July 19, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2 -m-4">
          <awc-button href="#" variant="text">Read more</awc-button>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal bordered shadow>
        <div slot="image" class="group relative block h-48 w-full md:h-full md:w-32 lg:w-48">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">April 07, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2 -m-4">
          <awc-button href="#" variant="text">Read more</awc-button>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal bordered shadow>
        <div slot="image" class="group relative block h-48 w-full md:h-full md:w-32 lg:w-48">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">March 15, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2 -m-4">
          <awc-button href="#" variant="text">Read more</awc-button>
        </div>
      </awc-card>
      <!-- article - end -->

      <!-- article - start -->
      <awc-card class="card-image" horizontal bordered shadow>
        <div slot="image" class="group relative block h-48 w-full md:h-full md:w-32 lg:w-48">
          <awc-image 
            aspectRatio="0.75"
            layout="inset"
            width="192"
            src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c" 
            class="transition duration-200 group-hover:scale-110 absolute inset-0"></awc-image>
        </div>
        
        <div class="flex flex-col gap-2">
          <span class="text-sm text-gray-400">January 27, 2021</span>

          <h2 class="text-xl font-bold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
          </h2>

          <p class="text-gray-500">This is a section of some simple filler text, also known as placeholder text.</p>
        </div>

        <div slot="footer" class="flex items-center gap-2 -m-4">
          <awc-button href="#" variant="text">Read more</awc-button>
        </div>
      </awc-card>
      <!-- article - end -->
    </div>
  </div>
</div>
```