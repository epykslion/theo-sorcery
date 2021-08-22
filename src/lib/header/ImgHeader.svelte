<header
  class="h-full w-full m-2 p-2"
>
    <h1 class="my-2 max-w-screen text-left text-4xl font-bold">
      <slot name="title"><span>Such a pretty place</span></slot>
    </h1>
    <div class="max-w-screen">
      
    <p class="py-2 text-left text-xl">
      <slot name="location"><span>But where are we?</span></slot>
    </p>
  </div>
  <a
    href="/photos"
    class="px-3 pb-1.5 pt-2 rounded-lg text-gray-100 bg-gray-800 hover:opacity-80"
    >&larr; Go Back?</a
  >
</header>
