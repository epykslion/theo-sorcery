<script>
  import MenuCard from "$lib/card/MenuCard.svelte";
  let menuItem = [
    {
      title: "Video Archive",
      description: "A selection of videos from my career in filmmaking",
      href: "/videos",
    },
    {
      title: "Photo Gallery",
      description: "Photographs, each with their own stories attached",
      href: "/photos",
    },
    {
      title: "The Blog!",
      description: "Thoughts and ideas about product, content, and startups",
      href: "/blog",
    },
  ];
</script>

<header class="max-w-xl p-4 mx-auto bg-white drop-shadow">
  <h1>Theodore Idris</h1>
  <p>Designing Simply Magical Experiences</p>
</header>
<main class="flex flex-col items-center justify-center">
  <p class="mt-4 text-sm text-gray-500 drop-shadow-xs">
    Check out my previous work below
  </p>
  <div class="space-y-4">
    {#each menuItem as { title, description, href }}
      <a sveltekit:prefetch {href}>
        <MenuCard>
          <span slot="title">{title}</span>
          <span slot="description">{description}</span>
        </MenuCard>
      </a>
    {/each}
  </div>
</main>
