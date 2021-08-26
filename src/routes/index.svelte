<script>
  import Header from '$lib/header/Header.svelte';
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
<Header>
  <span slot='title'>Theodore Idris</span>
  <span slot='subtitle'>Designing simply magical experiences</span>
  </Header>
  <main class='flex flex-col justify-center items-center'>
  <p class="text-gray-500 mt-4 text-sm drop-shadow-xs">Check out my previous work below</p>
<div class="space-y-4">
  {#each menuItem as { title, description, href }}
    <a svelte:prefetch {href}>
      <MenuCard>
        <span slot="title">{title}</span>
        <span slot="description">{description}</span>
      </MenuCard>
    </a>
  {/each}
</div>
</main>