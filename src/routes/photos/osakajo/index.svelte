<script>
  import ImgHeader from '$lib/header/ImgHeader.svelte';
  let osaka = [
    {
        src: '/photos/osakajo/osakajo-2.webp',
        alt: 'a path leading up to one of the old buildings in osakajo'
    },
    {
        src: '/photos/osakajo/osakajo-3.webp',
        alt: 'it feels peaceful staring at these old shrines in osakajo'
    },
    {
        src: '/photos/osakajo/osakajo-4.webp',
        alt: 'cherry blossoms blooming, we see an apartment in the background from inside osaka castle'
    }
  ]
</script>

<svelte:head>
  <title>Imperial Garden: Osakajo</title>
</svelte:head>
<article class="max-w-xl mx-auto">
<ImgHeader>
  <span slot="title"> Imperial Garden </span>
  <span slot="location">Osakajo</span>
</ImgHeader>
<img src='/photos/osakajo/osakajo-1.webp' alt='a pristine view of one of the few lakes from inside Osaka Castle, we see two traditional Japanese buildings in the background' class='max-w-screen px-2'/>
<div class="carousel p-2 space-x-2 carousel-center">
{#each osaka as {src, alt}}
  <div class="carousel-item">
    <img {src} {alt} class="rounded w-full">
  </div>
  {/each}
</div>
<img src='/photos/osakajo/osakajo-5.webp' alt='the gardens of osaka castle, a single sakura trees blossoming in the background' class='max-w-screen px-2'/>
<p class='py-2 px-4 md:px-6 text-lg'>
  I was fortunate enough to visit Osakajo (Osaka Castle) during my visit to
  Japan.
</p>
<p class='text-lg px-4 md:px-6 py-2'>
  The landscape was beautiful, I just had to snap these shots during our visit.
</p>
</article>