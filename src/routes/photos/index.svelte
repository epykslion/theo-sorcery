<script>
  import Header from '$lib/header/Header.svelte';
  let pics = [
    {
      title: 'Imperial Garden',
      location: 'Osakajo',
      caption: "A glimpse of Osakajo's beauty in spring",
      src: '/photos/osakajo/osakajo-5.webp',
      href: '/photos/osakajo'
    }
  ];
</script>

<Header>
  <span slot="title">Photo Gallery</span>
  <span slot="subtitle">There's a story in each one</span>
</Header>
<section class="mt-4">
  {#each pics as { title, location, caption, src, href }}
    <a svelte:prefetch {href} class="shadow bg-red-50 hover:shadow-lg">
      <article class='shadow-lg flex justify-start flex-col pb-6'>
        <img {src} alt={caption} class='mx-auto' width='450' height='300' />
        <h2 class='font-bold text-left mt-2 mx-4 text-2xl'>{title}</h2>
        <p class='mx-4 text-left text-gray-400'>{location}</p>
        <p class='text-left mx-4'>{caption}</p>
      </article>
    </a>
  {/each}
</section>
