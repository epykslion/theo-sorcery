<script>
  import "../app.postcss";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Navbar />
<main class="max-w-6xl mt-16 mb-4">
  <slot />
</main>
<Footer />
