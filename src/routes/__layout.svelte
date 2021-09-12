<script>
	import '../app.postcss';
	import Navbar from '$lib/shared/ui/components/navbar/Navbar.svelte';
	import Footer from '$lib/footer/Footer.svelte';
</script>

<Navbar />

<main class="pt-20">
	<slot />
</main>

<Footer />
