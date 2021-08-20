<script>
  import Header from '$lib/header/Header.svelte';
  let videos = [
    {
      name: 'I Wanna Dance With Somebody',
      client: 'An Honest Mistake',
      tag: 'music video',
      caption:
        "Whitney Houston's 80s classic, reimagined. Performed by the Malaysian Pop Punk band, An Honest Mistake",
      href: 'teGZOg8Ne74',
      id: 'teGZOg8Ne74',
      alt: 'An Honest Mistake, I Wanna Dance With Somebody featuring Haziq from I Lost The Plot'
    }
    //{ name: '', client: '', tag: '', caption: '', href: '', src: '', alt: '' }
  ];
</script>

<svelte:head>
  <title>Video Archives</title>
</svelte:head>

<Header>
  <span slot="title">Video Archive</span>
  <span slot="subtitle">What would you like to watch?</span>
</Header>
{#each videos as { name, caption, id, alt, client, tag }}
  <a href="https://www.youtube.com/watch?v={id}">
    <article
      class="flex flex-wrap items-center justify-center w-full pb-6 transition shadow-lg xl:pb-0 md:text-left hover:shadow-xl hover:bg-gray-800 hover:text-gray-100"
    >
      <div class="flex flex-col items-center justify-center">
        <img src="https://i.ytimg.com/vi/{id}/mqdefault.jpg" {alt} />
      </div>
      <div class="flex flex-col ml-4 md:pr-8">
        <h2 class="text-2xl font-bold">{name}</h2>
        <p class="mt-1 mb-2 text-gray-400">Client: {client}</p>
        <p class="font-medium">{caption}</p>
      </div>
    </article>
  </a>
{/each}
