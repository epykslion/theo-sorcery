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

<nav class="fixed top-0 left-0 right-0 z-50 block w-screen h-16 bg-white shadow-md">
<div class="inline max-w-lg m-auto">
  <!--Link to Home-->
  <div class="flex items-center justify-around">
	<a href="/" class="flex items-center justify-start m-2 text-xl font-medium text-gray-800 transition duration-200 hover:text-indigo-600 hover:drop-shadow-md">
		<img src="/whatsorcery-logo.png" height="32" width="32" class="mr-2 dropshadow" title="mao!" alt="what sorcery!"/>
		Hello, I'm Theo</a>
	<!--Dropdown-->
	<div class="relative inline-block group hover:block">
		<button class="relative inline-block h-12 p-2 mx-4 text-gray-800 transition duration-200 hover:dropshadow group-hover:block group-hover:-rotate-90 group-hover:scale-75">
			<svg width="32" height="32">
				<rect y="15" width="28" height="3" rx="4"></rect>
				<rect y="5" width="28" height="3" rx="4"></rect>
				<rect y="25" width="28" height="3" rx="4"></rect>
			</svg>
</button>
    <!--dropdown items-->
		<ul class="absolute right-0 z-50 flex-col items-center justify-center hidden p-4 space-y-4 transition duration-300 bg-gray-200 shadow-md group-hover:flex">
		{#each links as {href, text}} 
			<a {href}>
			    <li class= "p-4 mx-2 transition duration-300 bg-white shadow-md w-80 hover:shadow-lg hover:bg-indigo-400">
					{text}
			    </li>
		    </a>
		    {/each}
		</ul>
	</div>
  </div>
</div>
</nav>