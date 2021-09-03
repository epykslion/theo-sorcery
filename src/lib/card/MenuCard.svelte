<article
  class="p-4 my-4 bg-white transition-all border border-gray-100 rounded-sm drop-shadow cursor-pointer w-80 hover:shadow-lg hover:bg-indigo-600 hover:text-gray-300"
>
  <h2 class="pt-1 mb-2 text-xl font-bold">
    <slot name="title">
      <span class="text-gray-600">Please add title</span>
    </slot>
  </h2>

  <div class="mb-2 leading-tight">
    <slot name="description">
      <span class="text-gray-600">Please add description</span>
    </slot>
  </div>
</article>
