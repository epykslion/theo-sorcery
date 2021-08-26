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
</script>
<nav class="fixed top-0 right-0 left-0 h-12 bg-white w-screen shadow-md z-50 flex items-center justify-between">
	<!--Link to Home-->
	<a href="/" class="flex text-gray-800 m-2 font-medium items-center justify-start">
		<img src="whatsorcery-logo.png" height="32" width="32" class="mr-2" alt="what sorcery!"/>
		Hello, I'm Theo</a>
	<!--Dropdown-->
	<div class="relative group inline-block hover:block">
		<button class="inline-block hover:shadow-lg relative text-gray-800 mx-4 h-12 p-2 group-hover:block transition group-hover:-rotate-90 group-hover:dropshadow">
			<svg width="32" height="32">
				<rect y="15" width="28" height="3" rx="4"></rect>
				<rect y="5" width="28" height="3" rx="4"></rect>
				<rect y="25" width="28" height="3" rx="4"></rect>
			</svg>
</button>
    <!--dropdown items-->
		<ul class="hidden absolute bg-gray-200 shadow-md p-4 w-screen space-x-1 right-0 z-50 group-hover:block ">
		{#each links as {href, text}} 
			<a {href}>
			    <li class= "shadow-md md:shadow-lg p-4 hover:bg-indigo-200 hover:shadow-lg bg-white mx-1">
					{text}
			    </li>
		    </a>
		    {/each}
		</ul>
	</div>
</nav>