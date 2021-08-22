<script>
  import Header from '$lib/header/Header.svelte';
  let pics = [
    {
      title: 'Imperial Garden',
      location: 'Osakajo',
      caption: "A glimpse of Osakajo's beautiful landscape scenery in spring",
      src: '/photos/osakajo/osakajo-5.webp',
      href: '/photos/osakajo'
    }
  ];
</script>

<Header>
  <span slot="title">Photo Gallery</span>
  <span slot="subtitle">There's a story in each one</span>
</Header>
<section>
  {#each pics as { title, location, caption, src, href }}
    <a svelte:prefetch {href} class="shadow bg-red-50 hover:shadow-lg">
      <article class='shadow-lg flex justify-center flex-col pb-6'>
        <img {src} alt={caption} class='mx-auto' width='300' height='200' />
        <h2 class='font-bold mt-2 text-xl'>{title}</h2>
        <p class='text-gray-500'>{location}</p>
        <p class='px-4'>{caption}</p>
      </article>
    </a>
  {/each}
</section>
