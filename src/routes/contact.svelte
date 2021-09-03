<script>
  import ContactForm from "$lib/form/ContactForm.svelte";
</script>

<svelte:head>
  <title>Get in touch</title>
</svelte:head>
<div class="flex flex-col items-center justify-center w-screen">
  <h1 class="mb-4 text-3xl font-semibold text-gray-600 md:text-4xl">
    Like what you see?<br /><span class="text-xl md:text-4xl"> Book a free consultation today!</span>
  </h1>
  <div class="mx-auto">
    <ContactForm />
  </div>
</div>
