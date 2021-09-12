<script>
  import Header from "$lib/header/Header.svelte";
  let videos = [
    {
      title: "Showreel 2020",
      client: "Various",
      tag: "Video",
      caption: "My showreel from 2020, featuring some of my latest work of that year",
      id: "ZGA-ILL6dkQ",
      alt: "A boy with a headband holding up a rasengan",
    },
    {
      title: "Japanese Garlic Fried Rice",
      client: "Me, I was hungry",
      tag: "Video",
      caption: "A cooking video, inspired by <a class='font-semibold text-blue-500 underline hover:font-bold hover:text-blue-600' href='https://www.youtube.com/watch?v=86QgYvlWEU0'>Alvin's cooking videos</a> from Tasty",
      id: "DvqI1LAlARY",
      alt: "A bowl of delicious Japanese garlic fried rice",
    },
    {
      title: "Cheong Kwan Jang Ninjas",
      client: "Beat Nation",
      tag: "Video",
      caption:
        "A parody commercial commissioned for the South Korean Ginseng company, Korea Ginseng Corporation",
      id: "LSXGokGMxLc",
      alt: "A box of Cheong Kwan Jang Korean Ginseng, sitting pleasantly on a fluffy red pillow. #totallynotsellingout",
    },
    {
      title: "I Wanna Dance With Somebody",
      client: "An Honest Mistake",
      tag: "Video",
      caption:
        "Whitney Houston's Classic, performed by Malaysian Pop Punk band, An Honest Mistake",
      id: "teGZOg8Ne74",
      alt: "I Wanna Dance With Somebody, covered by An Honest Mistake, featuring Haziq from I Lost The Plot",
    },
    //{ title: '', client: '', tag: '', caption: '', href: '', src: '', alt: '' }
  ];
</script>

<svelte:head>
  <title>Notable Work by Theo Nikolai</title>
</svelte:head>

<Header>
  <span slot="title">My video portfolio</span>
  <span slot="subtitle">What would you like to watch?</span>
</Header>
{#each videos as { title, caption, id, alt, client, tag }}
  <a
    class="z-0 flex flex-col justify-center max-w-2xl mx-auto transition duration-300 bg-white group filter drop-shadow hover:scale-105 hover:z-20 hover:drop-shadow-md"
    href="https://www.youtube.com/watch?v={id}"
  >
    <article
      class="flex flex-wrap items-center justify-center pb-6 my-4 transition-all border shadow-lg text-coolGray-600 md:pb-16 md:flex-nowrap lg:max-w-5xl xl:pb-0 md:text-left group-hover:shadow-xl group-hover:text-blueGray-800 group-hover:bg-indigo-200"
    >
      <img 
        class="w-screen mb-2 transition duration-300 sm:w-72 drop-shadow sm:h-max hover:scale-105 hover:drop-shadow-xl hover:-translate-y-1 filter"
        src="https://i.ytimg.com/vi/{id}/mqdefault.jpg"
        {alt}
      />
      <div class="flex flex-col px-2 mx-2 md:ml-4 md:pr-8">
        <h2 class="mt-2 text-xl font-bold">{title}</h2>
        <p class="text-xs my-0.5 text-gray-500">Client: {client}</p>
        <p class="font-medium leading-snug md:mb-2">{@html caption}</p>
        <p class="relative px-2 py-1 mx-2 text-xs font-semibold transition duration-300 -translate-x-1 -translate-y-1 border-2 rounded-full border-violet-200 bg-violet-300 w-max group-hover:drop-shadow-sm filter">{tag}</p>
      </div>
    </article>
  </a>
{/each}
