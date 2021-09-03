<header class="mx-auto flex max-w-xlg flex-col p-2 justify-start items-start">
  <h1 class="my-2 text-left text-4xl md:text-5xl font-bold">
    <slot name="title"><span>Such a pretty place</span></slot>
  </h1>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
        clip-rule="evenodd"
      />
    </svg>
    <p class="text-left px-1 text-xl">
      <slot name="location"><span>But where are we?</span></slot>
    </p>
  </div>
</header>
