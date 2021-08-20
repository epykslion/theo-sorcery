<header
  class="items-center justify-center w-screen pb-4 mb-6 bg-white drop-shadow pt-8"
>
  <div>
    <h1 class="my-2 text-5xl font-bold">
      <slot name="title"><span>Oh no</span></slot>
    </h1>
    <p class="mb-4 text-xl">
      <slot name="subtitle"><span>Nothing to see here</span></slot>
    </p>
  </div>
  <a
    href="/"
    class="px-3 pb-1.5 pt-2 rounded-lg text-gray-100 bg-gray-800 hover:opacity-80"
    >&larr; Go Back?</a
  >
</header>
