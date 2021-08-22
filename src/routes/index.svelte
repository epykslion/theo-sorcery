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
  <h1 class="mt-20">Theodore Idris</h1>
  <p class='mx-2'>Content Creator since 2010</p>
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
