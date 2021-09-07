<script>
  import "../app.postcss";
  import Navbar from "$lib/navbar/Navbar.svelte";
  import Footer from "$lib/footer/Footer.svelte";
</script>

<Navbar />
  <slot></slot>
<Footer />
