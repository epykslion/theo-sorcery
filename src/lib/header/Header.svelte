<header class="absolute top-6">
  <h1 class="my-2 text-5xl font-bold">
    <slot name="title"><span>Oh no</span></slot>
  </h1>
  <p class="mb-4 text-xl">
    <slot name="subtitle"><span>Nothing to see here</span></slot>
  </p>
  <div>
    <a
      href="/"
      class="px-3 pb-1.5 pt-1 rounded-sm font-semibold text-gray-100 bg-gray-800 hover:opacity-80"
      >&larr; Go Back?</a
    >
  </div>
</header>
