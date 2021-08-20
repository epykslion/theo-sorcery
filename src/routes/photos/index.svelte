<script>
  import Header from '$lib/header/Header.svelte';
  let pics = [
    {
      title: 'Imperial Garden',
      location: 'Osakajo',
      src: './osakajo/osakajo-5.webp',
      caption: "A glimpse of Osakajo's beautiful landscape scenery in spring",
      href: './osakajo'
    }
  ];
</script>

<Header>
  <span slot="title">Photo Gallery</span>
  <span slot="subtitle">There's a story in each one</span>
</Header>
<main>
  {#each pics as { title, location, src, caption, href }}
    <a {href} class="shadow bg-red-50 hover:shadow-lg">
      <article>
        <img {src} alt={caption} />
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{caption}</p>
      </article>
    </a>
  {/each}
</main>
