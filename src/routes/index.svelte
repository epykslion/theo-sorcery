<script>
  import MenuCard from '$lib/card/MenuCard.svelte';
  import Header from '$lib/header/Header.svelte';
  let menuItem = [
    {
      title: 'Video Archive',
      description: 'A selection of videos from my career in filmmaking',
      href: '/video'
    },
    {
      title: 'Photo Gallery',
      description: 'Photography Collection, each with their stories attached',
      href: '/gallery'
    },
    {
      title: 'Resources',
      description:
        'Lists, ideas and thoughts on product, content, and startups',
      href: '/resources'
    }
  ];
</script>

<Header>
  <span slot="title">Theodore Idris</span>
  <span slot="subtitle">Content Creator since 2010</span>
</Header>
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
