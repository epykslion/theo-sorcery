<script>
  import Header from '$lib/header/Header.svelte';
  let videos = [
    {
      title: 'Cheong Kwan Jang Ninjas',
      client: 'Beat Nation',
      tag: ['comedy', 'commercial', 'visual effects'],
      caption:
        'A parody commercial commissioned for the South Korean Ginseng company, Korea Ginseng Corporation',
      id: 'LSXGokGMxLc',
      alt: 'A box of Cheong Kwan Jang Korean Ginseng, sitting pleasantly on a fluffy red pillow. #totallynotsellingout'
    },
    {
      title: 'I Wanna Dance With Somebody',
      client: 'An Honest Mistake',
      tag: 'music video',
      caption:
        "An 80s Classic, performed by Malaysian Pop Punk band, An Honest Mistake, featuring Haziq from I Lost The Plot",
      id: 'teGZOg8Ne74',
      alt: 'I Wanna Dance With Somebody, covered by An Honest Mistake, featuring Haziq from I Lost The Plot'
    }
    //{ title: '', client: '', tag: '', caption: '', href: '', src: '', alt: '' }
  ];
</script>

<svelte:head>
  <title>Video Archive</title>
</svelte:head>

<Header>
  <span slot="title">Video Archive</span>
  <span slot="subtitle">What would you like to watch?</span>
</Header>
{#each videos as { title, caption, id, alt, client }}
  <a class="justify-center" href="https://www.youtube.com/watch?v={id}">
    <article
      class="flex flex-wrap items-center justify-center pb-6 my-4 transition-all shadow-lg md:pb-16 md:flex-nowrap lg:max-w-5xl xl:pb-0 md:text-left hover:shadow-2xl hover:bg-gray-800 hover:text-gray-100"
    >
      <img class="w-screen mb-2 xs:w-auto" src="https://i.ytimg.com/vi/{id}/mqdefault.jpg" {alt} />
      <div class="flex px-2 flex-col md:ml-4 md:pr-8">
        <h2 class="text-xl mt-2 font-bold">{title}</h2>
        <p class="mt-1 mb-2 text-gray-400">Client: {client}</p>
        <p class="font-medium text-base md:mb-2">{caption}</p>
      </div>
    </article>
  </a>
{/each}
