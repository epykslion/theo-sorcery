<script lang="ts">
// Start: Local Imports

// Start External Imports
  import "../app.postcss";
  import "../app.postcss";

  // End: External Imports

  // Core Services

  // Components

  import NavigationBar from "$ui/components/navigation-bar/NavigationBar.svelte";
  import Footer from "$ui/components/footer/Footer.svelte";
</script>

<NavigationBar/>

<main class="pt-20">
	<slot />
</main>

<Footer/>
