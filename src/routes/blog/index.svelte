<script>
  import Header from '$lib/header/Header.svelte'
</script>
<svelte:head>
  <title>The Blog!</title>
  <meta rel='description' content='Thoughts and ideas about product, content, and startups'/>
</svelte:head>
<Header>
  <span slot='title'>The Blog!</span>
  <span slot='subtitle'>The exclamation <span class='font-bold font-serif underline'>is</span>  necessary</span>
</Header>