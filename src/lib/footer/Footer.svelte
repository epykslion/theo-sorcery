<script>
  let links = [
    {
    href: "/",
    text: "Home"
    },
    {
    href: "/about",
    text: "About"
    },
    {
    href: "/videos",
    text: "Videos"
    },
    {
    href: "/photos",
    text: "Photos"
    },
    {
    href: "/blog",
    text: "Blog"
    },
    {
    href: "/contact",
    text: "Contact"
    },
    ]
    let socials = [
    {
    href: "https://github.com/theonikolai/theo-sorcery",
    title: "the link to this repository",
    link: "GitHub"
    },
    {
    href: "https://linkedin.com/in/theonikolai",
    title: "my linkedin profile",
    link: "LinkedIn"
    },
    {
    href: "https://twitter.com/theonikomao",
    title: "check out my twitter",
    link: "Twitter"
    }
    ]
</script>

<footer class="flex m-2 space-y-2 justify-center flex-col items-center md:flex-row-wrap md:justify-around">
<a href="/"><img src="whatsorcery-logo.png" height="32" width="32" alt="what sorcery logo"/></a>
<p class="font-medium">More features coming soon!</p>
<div>
<p class="font-semibold">Directory</p>
{#each links as {href, text}}
<a {href}>{text}</a>
{/each}
<div>
<p class="font-semibold">Socials</p>
{#each socials as {href, title, link}}
<a {href} {title}>{link}</a><br/>
{/each}
</div>
<div class="tracking-wider my-4">
Created by Theo Nikolai Idris
</div>
</footer>