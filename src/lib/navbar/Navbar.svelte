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
		<img src="whatsorcery-logo.png" height="32" width="32" class="mr-2 dropshadow" title="mao!" alt="what sorcery!"/>
		Hello, I'm Theo</a>
	<!--Dropdown-->
	<div class="relative group inline-block hover:block">
		<button class="inline-block hover:dropshadow relative text-gray-800 mx-4 h-12 p-2 group-hover:block duration-300 transition group-hover:-rotate-90 group-hover:scale-75">
			<svg width="32" height="32">
				<rect y="15" width="28" height="3" rx="4"></rect>
				<rect y="5" width="28" height="3" rx="4"></rect>
				<rect y="25" width="28" height="3" rx="4"></rect>
			</svg>
</button>
    <!--dropdown items-->
		<ul class="hidden absolute bg-gray-200 shadow-md flex-col p-4 w-screen h-[95vh] space-y-3 right-0 z-50 group-hover:flex">
		{#each links as {href, text}} 
			<a {href}>
			    <li class= "shadow-md md:shadow-lg p-4 hover:bg-indigo-400 bg-white mx-2">
					{text}
			    </li>
		    </a>
		    {/each}
		</ul>
	</div>
</nav>