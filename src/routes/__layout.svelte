<script>
  import '../app.postcss';
  import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<Navbar/>
  <main class="mt-16">
  <slot></slot>
  </main>
