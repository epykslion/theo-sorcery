<script>
  import '../app.postcss';
  import Navbar from '$lib/navbar/Navbar.svelte';
  import Footer from '$lib/footer/Footer.svelte'
</script>

<Navbar/>
  <main class="mt-16 mb-4">
  <slot></slot>
  </main>
<Footer/>