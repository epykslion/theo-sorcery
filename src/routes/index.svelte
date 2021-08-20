<script>
  import MenuCard from '$lib/card/MenuCard.svelte';
  let menuItem = [
    {
      title: 'Video Archive',
      description: 'A selection of videos from my career in filmmaking',
      href: '/videos'
    },
    {
      title: 'Photo Gallery',
      description: 'Photographs, each with their own stories attached',
      href: '/photos'
    },
    {
      title: 'The Blog!',
      description:
        'Thoughts and ideas about product, content, and startups',
      href: '/blog'
    }
  ];
</script>

<header class="items-center justify-center w-screen pb-4 mb-2 bg-white shadow pt-8">
  <div><h1 class="my-2 text-5xl font-bold">Theodore Idris</h1>
  <p class="mb-4 text-xl">Content Creator since 2010</p></div>
  <a
    href="/about"
    class="px-3 pb-1.5 pt-2 rounded-lg text-gray-100 bg-gray-800 hover:opacity-80"
    >So what <span class='font-bold underline'>is</span> a Theo?</a
  >
</header>
<div class="space-y-4">
  {#each menuItem as { title, description, href }}
    <a {href}>
      <MenuCard>
        <span slot="title">{title}</span>
        <span slot="description">{description}</span>
      </MenuCard>
    </a>
  {/each}
</div>
