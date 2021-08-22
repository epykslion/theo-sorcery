<nav class="fixed h-16 top-0 left-0 shadow flex items-center justify-around w-screen bg-white">
  <a href="/" class="inline-flex absolute inset-y-0 left-0 items-center p-2" svelte:prefetch>
    <img src="whatsorcery-logo.png" alt="what sorcery's logo" height="32" width="32"/>
    <p class="font-bold mx-2 relative text-center">
      Hey, I'm Theo
    </p>
  </a>
  <menu class='dropdown dropdown-end'>
    <!--TODO: Add SVG here
    class='sm:hidden'
    -->
    <ul class='p-2 shadow flex flex-col dropdown-content w-screen h-screen bg-white space-4 sm:flex-row'>
      <li><a svelte:prefetch href='/'>Home</a></li>
      <li><a svelte:prefetch href='/about'>About</a></li>
      <li><a svelte:prefetch href='/videos'>Videos</a></li>
      <li><a svelte:prefetch href='/photos'>Photos</a></li>
      <li><a svelte:prefetch href='/blog'>Blog</a></li>
      <li><a svelte:prefetch href='/contact'>Contact</a></li>
    </ul>
  </menu>
</nav>