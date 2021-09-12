<script lang="ts">
  const CLIENTS = [
    {
      brand: "Microsoft",
      src: "microsoft"
    },
    {
      brand: "Bausch and Lomb",
      src: "bausch-and-lomb"
    },
    {
      brand: "BFM",
      src: "bfm"
    },
    // {
    //   brand: "Blackberrys",
    //   src: "blackberrys"
    // },
    {
      brand: "Carlsberg",
      src: "carlsberg"
    },
    // {
    //   brand: "Cheong Kwan Jang",
    //   src: "cheong-kwan-jang"
    // },
    {
      brand: "Google",
      src: "google"
    },
    {
      brand: "Listerine",
      src: "listerine"
    },
    {
      brand: "Mytaman",
      src: "mytaman"
    },
    // {
    //   brand: "An Honest Mistake",
    //   src: "an-honest-mistake"
    // },
    {
      brand: "Petronas",
      src: "Petronas"
    },
    {
      brand: "Schneider Electric",
      src: "schneider-electric"
    },
    {
      brand: "Skechers",
      src: "skechers"
    },
  ]
</script>

<header class="container flex flex-col items-center px-4 py-5 mx-auto text-center h-4/5"
    >
      <h1 class="relative z-10 pb-6 text-4xl font-black leading-tight text-center text-gray-800 sm:text-5xl md:text-6xl tracking-snug sm:leading-snug md:leading-tight">
        We don't just make content
        <br />
        <span class="relative inline-flex">
          <span
            aria-hidden="false"
            class="absolute inset-0 inline transform scale-75 -translate-x-1 bg-red-300 md:scale-95 -rotate-2"
          />

          <span class="relative">We design experiences</span>
        </span>
      </h1>
      <div class="flex flex-wrap justify-center">
        <a href="/contact">
          <button
            class="px-8 py-3 m-1 text-xl font-bold transition duration-300 scale-90 bg-gray-800 border-2 text-gray-50 hover:bg-black filter hover:drop-shadow-xl hover:-translate-y-1"
            >Get in touch</button
          >
        </a>
        <a href="/about">
          <button
            class="px-8 py-3 m-1 text-xl text-gray-600 transition duration-300 scale-90 border-2 border-gray-600 hover:drop-shadow-xl filter hover:-text-black hover:border-black bg-coolGray-50 hover:text-gray-800 hover:-translate-y-1"
            >Learn more</button
          >
        </a>
      </div>
</header>
<!--Image-->
<section
    class="container inline-flex items-center justify-center transition duration-300 group hover:scale-95">
    <a class="flex items-center justify-center text-center max-w-content" href="/work">
    <p
      class="absolute hidden text-2xl font-extrabold text-gray-900 sm:text-4xl group-hover:block"
    >
      Check out our latest work<br />by <span class="text-indigo-900 underline cursor-pointer hover:text-indigo-700 hover:scale-105">clicking here</span>
    </p>
    <img
      src="/photos/osakajo/osakajo-5.webp"
      alt="A beautiful shot of Osakajo's garden"
      class="w-full sm:h-[400] sm:w-auto mx-auto transition duration-300 rounded-lg shadow-md group-hover:opacity-30"
    />
    </a>
</section>
  <!--Clients-->
  <section class="container mx-auto my-2 overflow-hidden text-center">
    <p class="block w-2/3 mx-auto mb-3 text-2xl leading-normal text-gray-600 md:inline-block md:w-full">Trusted by the following brands</p>
    <div class="relative flex flex-wrap items-center justify-center mx-auto sm:w-2/3">
      {#each CLIENTS as {brand, src}}
      <div><img title="{brand}" src="/icons/{src}.svg" alt="{brand}" class="h-5 mx-3 my-2 opacity-50 sm:h-8 sm:mx-3 sm:my-1 md:mx-4 md:my-3 filter grayscale"></div>
      {/each}
      </div>
      </section>
  <section class="relative">
  <div class="max-w-screen-xl mx-auto">
    <div class="px-6" />
  </div>
  <!--What I do-->
    <section class="py-4 mx-4 lg:mx-0">
     <div class="container relative flex flex-col items-start max-w-6xl px-6 py-12 mx-auto shadow-sm bg-gradient-to-bl sm:px-16 sm:pt-24 from-blueGray-800 to-sky-800 rounded-3xl md:flex-row">
    <div class="flex flex-col flex-wrap text-left lg:mb-16 md:w-3/5 lg:pr-24 md:pr-16 md:items-start md:mb-0">
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player class="w-screen sm:scale-150 sm:mr-12 sm:absolute sm:right-12" src="https://assets3.lottiefiles.com/packages/lf20_buratoqa.json"  background="transparent"  speed="1"  style="width: 290px; height: 290px;"  loop autoplay></lottie-player>
      <h2 class="mb-4 text-2xl font-black tracking-tight sm:mb-8 sm:text-4xl text-gray-50 md:text-4xl" style="opacity: 1; transform: translateY(0px);">
      Content Creation Services, Tailored to your Brand
      </h2>
      <p class="mt-4 text-xl text-gray-50 text-opacity-70">
      Start conversations with content that's uniquely yours. Learn what makes the best creators stand out and give your audience the experience they deserve.
      </p>
       <div class="flex mt-8">
        <a href="/work" type="button" class="inline-flex items-center px-10 py-4 text-lg font-medium text-center transition duration-500 ease-in-out transform border border-transparent rounded-lg text-gray-50 bg-emerald-600 lg:px-12 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-800">
          View our samples
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<section class="relative py-3 mx-4 lg:mx-0">
    <div class="relative sm:absolute">
      <img class="filter sm:scale-90 drop-shadow-lg" width="1080" height="720" src="/assets/browser-mockup.webp" alt="a mockup of a portfolio website in Safari's browser"/></div>
  <div class="container z-10 flex flex-col items-start max-w-6xl px-6 py-16 mx-auto overflow-hidden bg-top bg-cover shadow-sm bg-gradient-to-br from-sky-800 to-blueGray-800 rounded-3xl lg:py-20 lg:px-16">
    <div class="flex flex-col text-left lg:ml-auto lg:mb-16 lg:pl-24 md:pl-16 md:w-1/2 md:items-start md:mb-0 ">
      <h2 class="mb-4 text-3xl font-black sm:text-4xl filter drop-shadow-sm text-blueGray-50 md:text-4xl" style="opacity: 1; transform: translateY(0px);">
        Beautiful websites, built blazingly fast with even <span class="font-serif italic text-amber-500">Faster technology.
      </span></h2>
      <p class="text-xl leading-wider text-gray-50 text-opacity-70">
      No-Code? We know code.<br class="my-2"/>A slow website could mean thousands for your business
      </p>
       <div class="flex mt-12">
        <a href="/contact" type="button" class="inline-flex items-center px-8 py-2 my-2 text-lg font-medium text-center transition duration-500 ease-in-out transform border border-transparent rounded-lg text-gray-50 bg-emerald-600 lg:px-12 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-800">
          Find out how
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-3 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>


    <ul role="list" class="z-20 grid justify-start max-w-xl grid-cols-5 gap-6 mt-4 filter drop-shadow lg:mt-12 ">
  <li class="flex flex-col col-span-1 text-center">
    <div class="inline-flex items-center flex-shrink-0 w-12 h-12">
<svg class="w-10 h-10 mx-auto lg:h-16 lg:w-16" viewBox="0 0 91 90" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Figma</title>
<g clip-path="url(#clip0)">
<path d="M45.0264 45.5C45.0264 42.9804 46.0273 40.5641 47.8089 38.7825C49.5904 37.0009 52.0068 36 54.5264 36C57.0459 36 59.4623 37.0009 61.2439 38.7825C63.0255 40.5641 64.0264 42.9804 64.0264 45.5C64.0264 48.0196 63.0255 50.4359 61.2439 52.2175C59.4623 53.9991 57.0459 55 54.5264 55C52.0068 55 49.5904 53.9991 47.8089 52.2175C46.0273 50.4359 45.0264 48.0196 45.0264 45.5V45.5Z" fill="#1ABCFE"></path>
<path d="M26.0264 64.5C26.0264 61.9804 27.0273 59.5641 28.8089 57.7825C30.5904 56.0009 33.0068 55 35.5264 55H45.0264V64.5C45.0264 67.0196 44.0255 69.4359 42.2439 71.2175C40.4623 72.9991 38.0459 74 35.5264 74C33.0068 74 30.5904 72.9991 28.8089 71.2175C27.0273 69.4359 26.0264 67.0196 26.0264 64.5V64.5Z" fill="#0ACF83"></path>
<path d="M45.0264 17V36H54.5264C57.0459 36 59.4623 34.9991 61.2439 33.2175C63.0255 31.4359 64.0264 29.0196 64.0264 26.5C64.0264 23.9804 63.0255 21.5641 61.2439 19.7825C59.4623 18.0009 57.0459 17 54.5264 17H45.0264Z" fill="#FF7262"></path>
<path d="M26.0264 26.5C26.0264 29.0196 27.0273 31.4359 28.8089 33.2175C30.5904 34.9991 33.0068 36 35.5264 36H45.0264V17H35.5264C33.0068 17 30.5904 18.0009 28.8089 19.7825C27.0273 21.5641 26.0264 23.9804 26.0264 26.5V26.5Z" fill="#F24E1E"></path>
<path d="M26.0264 45.5C26.0264 48.0196 27.0273 50.4359 28.8089 52.2175C30.5904 53.9991 33.0068 55 35.5264 55H45.0264V36H35.5264C33.0068 36 30.5904 37.0009 28.8089 38.7825C27.0273 40.5641 26.0264 42.9804 26.0264 45.5V45.5Z" fill="#A259FF"></path>
</g>
<defs>
<clipPath id="clip0">
<rect width="38" height="57" fill="white" transform="translate(26.0264 17)"></rect>
</clipPath>
</defs>
</svg>
    </div>
      <h3 class="sr-only">Figma</h3>

  </li>
  <li class="flex flex-col col-span-1 text-center">
    <div class="inline-flex items-center flex-shrink-0 w-12 h-12">
<svg role="img" class="w-10 h-10 mx-auto lg:h-16 lg:w-16 fill-current text-[#38B2AC]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>
    </div>
      <h3 class="sr-only">Tailwind</h3>

  </li>
  <li class="flex flex-col col-span-1 text-center">
    <div class="inline-flex items-center flex-shrink-0 w-12 h-12">
<svg role="img" class="w-10 h-10 mx-auto lg:h-16 lg:w-16 fill-current text-[#FF3E00]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Svelte</title><path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z"/></svg>    </div>
      <h3 class="sr-only">Svelte</h3>

  </li>
  <li class="flex flex-col col-span-1 text-center">
    <div class="inline-flex items-center flex-shrink-0 w-12 h-12">
<svg role="img"class="w-10 h-10 mx-auto fill-current lg:h-16 lg:w-16 text-gray-50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Next.js</title><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"/></svg>
    </div>
      <h3 class="sr-only">Next.js</h3>

  </li>
  <li class="flex flex-col col-span-1 text-center">
    <div class="inline-flex items-center flex-shrink-0 w-12 h-12">
<svg role="img" class="w-10 h-10 mx-auto lg:h-16 lg:w-16 fill-current text-[#4353FF]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Webflow</title><path d="M17.802 8.56s-1.946 6.103-2.105 6.607a4778.8 4778.8 0 0 0-1.484-11.473c-3.316 0-5.089 2.36-6.026 4.851l-2.565 6.637c-.015-.476-.36-6.565-.36-6.565-.204-3.052-3-4.91-5.262-4.91l2.739 16.6c3.474-.015 5.347-2.361 6.328-4.852 0 0 2.09-5.398 2.176-5.643.015.23 1.5 10.494 1.5 10.494 3.488 0 5.362-2.202 6.37-4.606L24 3.708c-3.445 0-5.261 2.346-6.198 4.851Z"/></svg>    </div>
      <h3 class="sr-only">Webflow</h3>
  </li>
</ul>
    </div>
  </div>
</section>

  <div class="relative mx-4 my-2">
    <h3
      class="text-[1.75rem] ml-2 font-extrabold leading-9 tracking-tight text-left text-gray-900 lg:text-center sm:text-4xl sm:leading-10"
    >
      Want the latest tips on content strategy?
    </h3>
    <p
      class="max-w-3xl ml-2 sm:mx-auto mt-2 text-[1.15rem] sm:text-[1.3rem] leading-7 text-left text-gray-400 sm:text-center"
    >
      Subscribe to our newsletter below!
    </p>
    <form novalidate name="subscription" method="POST" data-netlify="true" class="container flex items-center justify-center mx-auto my-4 w-7xl">
      <div class="flex flex-col items-end justify-end space-x-2 space-y-4 text-left sm:flex-row max-h-max">
      <label for="name">
        Name
        <input
        type="text"
        placeholder="John Doe"
        class="block w-64 p-3 border border-gray-300 rounded md:w-56 h-min focus:ring-emerald-600 focus:shadow hover:drop-shadow-md drop-shadow filter sm:w-2/3"/>
      </label>
      <label for ="email">Email<input
          type="text"
          placeholder="example@email.com"
          class="block w-64 p-3 border border-gray-300 rounded md:w-56 h-min focus:ring-emerald-600 focus:shadow hover:drop-shadow-md drop-shadow filter sm:w-2/3"
        /></label>
        <button
          type="button"
          class="block w-64 h-12 p-3 mx-auto font-semibold transition duration-300 border border-gray-300 rounded shadow sm:w-1/3 hover:text-gray-50 hover:bg-emerald-500 hover:shadow-md active:"
          >Subscribe</button
        >
      </div>
    </form>
  </div>
</section>
