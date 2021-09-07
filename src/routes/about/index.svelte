<script>
  import ObjCard from "$lib/card/ObjCard.svelte"
</script>

<svelte:head>
  <title>About Theo</title>
</svelte:head>

<div
  class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20"
>
  <div class="relative">
    <!--Grid here-->
    <div
      class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
    >
      <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
        <p
          class="text-base font-normal leading-8 tracking-widest text-gray-400 uppercase"
        >
          Content creator since 2010
        </p>
        <h1
          class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 sm:text-3xl sm:leading-9"
        >
          Blending creativity with strategy to deliver truly memorable
          experiences
        </h1>
        <p class="mt-4 text-xl leading-6 text-gray-500">
          After working several years as a filmmaker, I suffered a massive burnout only to rediscover a new passion for startups, tech, and product development - eventually becoming a consultant.<br /><br />
          Now, alongside <a href="https://hannahazlan.com">Hannah Azlan</a>, we're developing several products and services to help rebuild the startup landscape.
        </p>
        <br/>
        <h2 class="text-xl">Here's what can I do</h2>
        <!--Skills-->
        <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                Video Production
              </span>
            </div>
          </li>
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                Photography
              </span>
            </div>
          </li>
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                Web Development
              </span>
            </div>
          </li>
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                Content Strategy
              </span>
            </div>
          </li>
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                No-Code Development
              </span>
            </div>
          </li>
          <li class="mt-6 lg:mt-0">
            <div class="flex">
              <span
                class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent"
              >
                <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span
                class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200"
              >
                Inbound Strategy
              </span>
            </div>
          </li>
        </ul>
      </div>
      <!--Photography-->
      <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
        <div class="relative space-y-4">
          <h2 class="text-2xl sm:hidden font-semibold">Samples of my photography</h2>
          <div class="flex items-end justify-center space-x-4 lg:justify-start">
            <img
              class="w-32 rounded-lg shadow-lg md:w-56"
              width="200"
              src="photos/portfolio/a-boat-in-the-sunset.webp"
              alt="A boat in fhe sunset"
            />
            <img
              class="w-40 rounded-lg shadow-lg md:w-64"
              width="260"
              src="/photos/osakajo/osakajo-1.webp"
              alt="One of the few lakes in Osaka Castle"
            />
          </div>
          <div
            class="flex items-start justify-center ml-12 space-x-4 lg:justify-start"
          >
            <img
              class="w-28 rounded-lg shadow-lg md:w-40"
              width="170"
              src="/photos/portfolio/prudential-event-photography.webp"
              alt="Prudential Event Photography"
            />
            <img
              class="w-32 rounded-lg shadow-lg md:w-56"
              width="200"
              src="/photos/portfolio/watch-product-shot.webp"
              alt="A watch wrapped around a fluffy white pillow"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!--Technology-->
<section class="dark:bg-coolGray-800 dark:text-coolGray-100 mx-8">
  <div class="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
    <h2 class="text-3xl sm:text-4xl font-bold">Technologies I'm familiar with</h2>
    <div class="flex flex-wrap justify-center lg:justify-between">
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="Plain HTML"
      class="filter drop-shadow group-hover:text-[#E34F26] group-hover:drop-shadow-lg w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
        <title>Plain HTML</title>
        <path
          d="M2 0h28l-2.547 28.75-11.484 3.25-11.417-3.25zM11.375 13l-0.307-3.625 13.411 0.005 0.307-3.495-17.573-0.005 0.932 10.682h12.167l-0.432 4.568-3.88 1.068-3.938-1.078-0.255-2.813h-3.479l0.443 5.563 7.229 1.932 7.172-1.927 0.99-10.875z"
        />
      </svg>
      <span slot="product">HTML 5</span>
      <span slot="text">The lingua franca of the web</span>
      </ObjCard>
      <ObjCard>
      <i
      class="fab fa-css3-alt fa-3x scale-95 filter group-hover:text-[#1572B6] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      title="css3"
      alt="css3"
      ></i>
      <span slot="product">CSS 3</span>
      <span slot="text">How we make the web prettier</span>
      </ObjCard>
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 32"
        aria-label="Tailwind CSS"
        class="filter group-hover:text-[#38B2AC] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
            <title>Tailwind CSS</title>
          <g clip-path="url(#prefix__clip0)">
            <path
            fill="#222"
            fill-rule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
            clip-rule="evenodd"/></g
        ><defs
          ><clipPath id="prefix__clip0"
            ><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath
          ></defs
        ></svg
      >
      <span slot="product">Tailwind CSS</span>
      <span slot="text">Like CSS, but in your HTML</span>
      </ObjCard>
      <ObjCard>
      <svg
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-label="Git"
        class="filter group-hover:text-[#F05032] group-hover:drop-shadow-lg drop-shadow w-14 h-14 ml-2 mr-4 my-5 fill-current"
      >
        <title>Git</title>
        <defs><path id="a" d="M.033.062h49.906V50H.033z" /></defs><g
          fill="none"
          fill-rule="evenodd"
          ><mask id="b" fill="#eee"><use xlink:href="#a" /></mask><path
            d="M48.997 22.807L27.193 1.004a3.216 3.216 0 00-4.548 0l-4.528 4.528 5.744 5.744a3.817 3.817 0 014.836 4.869l5.536 5.535A3.826 3.826 0 0138.187 28a3.827 3.827 0 01-6.246-4.163l-5.163-5.162V32.26a3.828 3.828 0 11-4.4 6.137 3.828 3.828 0 011.254-6.249v-13.71a3.826 3.826 0 01-2.077-5.018l-5.662-5.664L.942 22.706a3.218 3.218 0 000 4.55l21.805 21.803a3.217 3.217 0 004.548 0l21.702-21.702a3.218 3.218 0 000-4.55"
            fill="#222"
            mask="url(#b)"
          /></g
        ></svg
      >
      <span slot="product">Git</span>
      <span slot="text">Time Travel for Developers</span>
      </ObjCard>
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="Next.js"
        class="filter group-hover:text-[#000] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
        <title>Next.js</title>
        <path
          d="M23.749 30.005c-0.119 0.063-0.109 0.083 0.005 0.025 0.037-0.015 0.068-0.036 0.095-0.061 0-0.021 0-0.021-0.1 0.036zM23.989 29.875c-0.057 0.047-0.057 0.047 0.011 0.016 0.036-0.021 0.068-0.041 0.068-0.047 0-0.027-0.016-0.021-0.079 0.031zM24.145 29.781c-0.057 0.047-0.057 0.047 0.011 0.016 0.037-0.021 0.068-0.043 0.068-0.048 0-0.025-0.016-0.020-0.079 0.032zM24.303 29.688c-0.057 0.047-0.057 0.047 0.009 0.015 0.037-0.020 0.068-0.041 0.068-0.047 0-0.025-0.016-0.020-0.077 0.032zM24.516 29.547c-0.109 0.073-0.147 0.12-0.047 0.068 0.067-0.041 0.181-0.131 0.161-0.131-0.043 0.016-0.079 0.043-0.115 0.063zM14.953 0.011c-0.073 0.005-0.292 0.025-0.484 0.041-4.548 0.412-8.803 2.86-11.5 6.631-1.491 2.067-2.459 4.468-2.824 6.989-0.129 0.88-0.145 1.14-0.145 2.333 0 1.192 0.016 1.448 0.145 2.328 0.871 6.011 5.147 11.057 10.943 12.927 1.043 0.333 2.136 0.563 3.381 0.704 0.484 0.052 2.577 0.052 3.061 0 2.152-0.24 3.969-0.771 5.767-1.688 0.276-0.14 0.328-0.177 0.291-0.208-0.88-1.161-1.744-2.323-2.609-3.495l-2.557-3.453-3.203-4.745c-1.068-1.588-2.14-3.172-3.229-4.744-0.011 0-0.025 2.109-0.031 4.681-0.011 4.505-0.011 4.688-0.068 4.792-0.057 0.125-0.151 0.229-0.276 0.287-0.099 0.047-0.188 0.057-0.661 0.057h-0.541l-0.141-0.088c-0.088-0.057-0.161-0.136-0.208-0.229l-0.068-0.141 0.005-6.271 0.011-6.271 0.099-0.125c0.063-0.077 0.141-0.14 0.229-0.187 0.131-0.063 0.183-0.073 0.724-0.073 0.635 0 0.74 0.025 0.907 0.208 1.296 1.932 2.588 3.869 3.859 5.812 2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839 0.125-0.083c1.219-0.813 2.328-1.781 3.285-2.885 2.016-2.308 3.324-5.147 3.767-8.177 0.129-0.88 0.145-1.141 0.145-2.333 0-1.193-0.016-1.448-0.145-2.328-0.871-6.011-5.147-11.057-10.943-12.928-1.084-0.343-2.199-0.577-3.328-0.697-0.303-0.031-2.371-0.068-2.631-0.041zM21.5 9.688c0.151 0.072 0.265 0.208 0.317 0.364 0.027 0.084 0.032 1.823 0.027 5.74l-0.011 5.624-0.989-1.52-0.995-1.521v-4.083c0-2.647 0.011-4.131 0.025-4.204 0.047-0.167 0.161-0.307 0.313-0.395 0.124-0.063 0.172-0.068 0.667-0.068 0.463 0 0.541 0.005 0.645 0.063z"
        />
      </svg>
      <span slot="product">Next JS</span>
      <span slot="text">Vercel wanted an easier React</span>
      </ObjCard>
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="React"
        class="filter group-hover:text-[#61DAFB] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
        <title>React</title>
        <path
          d="M16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854c1.573 0 2.854-1.281 2.854-2.854s-1.281-2.854-2.854-2.854zM8.010 21.672l-0.63-0.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l0.63-0.156 0.177 0.625c0.474 1.635 1.083 3.229 1.818 4.771l0.135 0.281-0.135 0.286c-0.734 1.536-1.344 3.13-1.818 4.771zM7.089 11.932c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c0.438-1.391 0.964-2.745 1.578-4.063-0.615-1.318-1.141-2.672-1.578-4.063zM23.99 21.672l-0.177-0.625c-0.474-1.635-1.083-3.229-1.818-4.766l-0.135-0.286 0.135-0.286c0.734-1.536 1.344-3.13 1.818-4.771l0.177-0.62 0.63 0.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zM23.333 15.995c0.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-0.438 1.385-0.964 2.745-1.578 4.063zM7.078 11.927l-0.177-0.625c-1.318-4.646-0.917-7.979 1.099-9.141 1.979-1.141 5.151 0.208 8.479 3.625l0.453 0.464-0.453 0.464c-1.182 1.229-2.26 2.552-3.229 3.958l-0.182 0.255-0.313 0.026c-1.703 0.135-3.391 0.406-5.047 0.813zM9.609 3.089c-0.359 0-0.677 0.073-0.943 0.229-1.323 0.766-1.557 3.422-0.646 7.005 1.422-0.318 2.859-0.542 4.313-0.672 0.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zM22.396 30.234c-0.005 0-0.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-0.453-0.464 0.453-0.464c1.182-1.229 2.26-2.552 3.229-3.958l0.177-0.255 0.313-0.031c1.703-0.13 3.391-0.401 5.052-0.813l0.63-0.156 0.177 0.625c1.318 4.646 0.917 7.974-1.099 9.135-0.49 0.281-1.042 0.422-1.604 0.411zM16.932 25.729c2.078 2.026 4.047 3.172 5.458 3.172h0.005c0.354 0 0.672-0.078 0.938-0.229 1.323-0.766 1.563-3.422 0.646-7.005-1.422 0.318-2.865 0.542-4.313 0.667-0.833 1.193-1.75 2.323-2.734 3.396zM24.922 11.927l-0.63-0.161c-1.661-0.406-3.349-0.677-5.052-0.813l-0.313-0.026-0.177-0.255c-0.969-1.406-2.047-2.729-3.229-3.958l-0.453-0.464 0.453-0.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zM19.667 9.651c1.521 0.141 2.969 0.365 4.313 0.672 0.917-3.583 0.677-6.24-0.646-7.005-1.318-0.76-3.797 0.406-6.401 2.943 0.984 1.073 1.896 2.203 2.734 3.391zM9.609 30.234c-0.563 0.010-1.12-0.13-1.609-0.411-2.016-1.161-2.417-4.49-1.099-9.135l0.177-0.625 0.63 0.156c1.542 0.391 3.24 0.661 5.047 0.813l0.313 0.031 0.177 0.255c0.969 1.406 2.047 2.729 3.229 3.958l0.453 0.464-0.453 0.464c-2.526 2.604-4.969 4.031-6.865 4.031zM8.021 21.667c-0.917 3.583-0.677 6.24 0.646 7.005 1.318 0.75 3.792-0.406 6.401-2.943-0.984-1.073-1.901-2.203-2.734-3.396-1.453-0.125-2.891-0.349-4.313-0.667zM16 22.505c-1.099 0-2.224-0.047-3.354-0.141l-0.313-0.026-0.182-0.26c-0.635-0.917-1.24-1.859-1.797-2.828-0.563-0.969-1.078-1.958-1.557-2.969l-0.135-0.286 0.135-0.286c0.479-1.010 0.995-2 1.557-2.969 0.552-0.953 1.156-1.906 1.797-2.828l0.182-0.26 0.313-0.026c2.234-0.188 4.479-0.188 6.708 0l0.313 0.026 0.182 0.26c1.276 1.833 2.401 3.776 3.354 5.797l0.135 0.286-0.135 0.286c-0.953 2.021-2.073 3.964-3.354 5.797l-0.182 0.26-0.313 0.026c-1.125 0.094-2.255 0.141-3.354 0.141zM13.073 21.057c1.969 0.151 3.885 0.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-0.844-1.76-1.823-3.453-2.932-5.063-1.948-0.151-3.906-0.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063 0.849 1.76 1.828 3.453 2.932 5.063z"
        />
      </svg>
      <span slot="product">ReactJS</span>
      <span slot="text">Facebook wanted an easier dev experience</span>
      </ObjCard>
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="Svelte"
        class="filter group-hover:text-[#FF3E00] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
        <title>Svelte</title>
        <path
          d="M27.573 4.229c-2.927-4.25-8.656-5.479-13.068-2.802l-7.464 4.745c-2.042 1.281-3.443 3.365-3.854 5.734-0.365 1.969-0.047 4.005 0.891 5.776-0.641 0.964-1.073 2.052-1.266 3.198-0.427 2.406 0.13 4.885 1.547 6.88 2.932 4.24 8.646 5.474 13.068 2.828l7.469-4.75c2.031-1.281 3.427-3.365 3.839-5.734 0.359-1.964 0.042-3.995-0.896-5.755 1.984-3.115 1.88-7.12-0.266-10.12zM13.76 28.172c-2.401 0.625-4.938-0.318-6.349-2.359-0.865-1.198-1.182-2.677-0.932-4.146l0.146-0.708 0.135-0.438 0.401 0.266c0.88 0.667 1.865 1.146 2.917 1.469l0.271 0.094-0.031 0.266c-0.026 0.37 0.083 0.786 0.297 1.104 0.438 0.63 1.198 0.932 1.932 0.734 0.161-0.052 0.318-0.104 0.453-0.188l7.438-4.745c0.375-0.24 0.615-0.599 0.708-1.026 0.083-0.443-0.026-0.896-0.266-1.255-0.443-0.615-1.198-0.891-1.932-0.708-0.161 0.057-0.333 0.12-0.469 0.203l-2.813 1.786c-2.661 1.583-6.099 0.839-7.865-1.708-0.859-1.198-1.198-2.693-0.938-4.146 0.26-1.438 1.12-2.698 2.365-3.469l7.422-4.745c0.469-0.292 0.974-0.505 1.521-0.667 2.401-0.625 4.932 0.318 6.349 2.349 1 1.406 1.281 3.203 0.76 4.849l-0.135 0.443-0.385-0.266c-0.891-0.651-1.88-1.146-2.932-1.469l-0.266-0.078 0.026-0.266c0.026-0.391-0.083-0.802-0.297-1.12-0.438-0.63-1.198-0.896-1.932-0.708-0.161 0.052-0.318 0.104-0.453 0.188l-7.453 4.786c-0.375 0.25-0.615 0.599-0.693 1.036-0.078 0.427 0.026 0.896 0.266 1.24 0.427 0.63 1.203 0.896 1.922 0.708 0.172-0.052 0.333-0.104 0.464-0.188l2.844-1.813c0.464-0.307 0.984-0.531 1.516-0.677 2.417-0.63 4.938 0.318 6.349 2.359 0.865 1.198 1.198 2.677 0.958 4.13-0.25 1.438-1.099 2.698-2.333 3.469l-7.438 4.734c-0.484 0.292-1.005 0.521-1.547 0.677z"
        />
      </svg>
      <span slot="product">Svelte</span>
      <span slot="text">Like Vue, but without a Virtual DOM</span>
      </ObjCard>
      <ObjCard>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-label="Vue.js"
        class="filter group-hover:text-[#4FC08D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
        <title>Vue.js</title>
        <path
          d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"
        />
      </svg>
      <span slot="product">Vue</span>
      <span slot="text">Like React, but with more HTML</span>
      </ObjCard>
    </div>
  </div>
</section>
<section class="dark:bg-coolGray-800 dark:text-coolGray-100 mx-8">
  <div class="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
    <h2 class="text-3xl sm:text-4xl font-bold">Web Tools of choice</h2>
    <div class="flex flex-wrap justify-center lg:justify-between">
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#007ACC] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Visual Studio Code</title>
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>
      <span slot="product">VS Code</span>
      <span slot="text">How all that Coding Magic works</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#00C7B7] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Netlify</title>
      <path d="M17.3877 8.3286l-.0088-.0037c-.005-.002-.01-.0038-.0144-.0082a.0689.0689 0 0 1-.0176-.0582l.4839-2.9581 2.269 2.2696L17.74 8.574a.052.052 0 0 1-.0206.0037H17.71a.0647.0647 0 0 1-.0126-.0106 1.074 1.074 0 0 0-.3097-.2385zm3.291-.1802l2.4262 2.426c.5039.5045.7561.7562.8481 1.0479.0138.0431.025.0863.0338.1308l-5.798-2.4555a.4557.4557 0 0 0-.0093-.0038c-.0232-.0094-.0501-.02-.0501-.0439 0-.0237.0275-.035.0507-.0444l.0075-.0031zm3.2092 4.3833c-.1252.2354-.3693.4795-.7824.8932l-2.7353 2.7347-3.5377-.7367-.0188-.0038c-.0313-.005-.0645-.0107-.0645-.0388a1.0678 1.0678 0 0 0-.41-.7467c-.0144-.0144-.0106-.037-.0063-.0576 0-.003 0-.0063.0013-.0088l.6654-4.0848.0025-.0138c.0038-.0313.0094-.0676.0376-.0676a1.0829 1.0829 0 0 0 .726-.4162c.0056-.0063.0094-.0131.017-.0169.02-.0094.0437 0 .0644.0088l6.0402 2.555zm-4.1467 4.257l-4.498 4.4979.77-4.732.0012-.0063a.083.083 0 0 1 .0038-.0182c.0063-.015.0226-.0213.0382-.0275l.0075-.0031a1.158 1.158 0 0 0 .435-.3236c.015-.0176.0332-.0345.0564-.0376a.0563.0563 0 0 1 .0181 0l3.1672.651zm-5.45 5.4499l-.507.507-5.6052-8.1007a.2654.2654 0 0 0-.0062-.0088c-.0088-.012-.0182-.0238-.0163-.0376.0006-.01.0069-.0188.0138-.0263l.0062-.0081c.017-.025.0313-.05.047-.077l.0125-.0219.0019-.0019c.0087-.015.0169-.0294.0319-.0376.0131-.0063.0313-.0038.0457-.0006l6.2098 1.2807a.1027.1027 0 0 1 .0476.0206c.008.0081.01.017.0119.027a1.0998 1.0998 0 0 0 .6434.7354c.0175.0088.01.0282.002.0488a.149.149 0 0 0-.0095.0282c-.0782.4757-.7492 4.568-.9295 5.6728zm-1.059 1.0584c-.3737.37-.594.5659-.8432.6447a1.2519 1.2519 0 0 1-.7549 0c-.2916-.0926-.5439-.3442-1.0478-.8487l-5.629-5.629 1.4704-2.2802a.0938.0938 0 0 1 .025-.0294c.0157-.0113.0382-.0063.057 0a1.5235 1.5235 0 0 0 1.0253-.052c.0169-.0063.0338-.0106.0469.0013a.119.119 0 0 1 .0175.02l5.6327 8.174zm-8.8175-6.3756L3.1234 15.63l2.55-1.0879a.0526.0526 0 0 1 .0207-.0044c.0213 0 .0338.0213.045.0407a1.8214 1.8214 0 0 0 .0814.1152l.0082.01c.0075.0106.0025.0213-.005.0313l-1.4084 2.1864zm-1.8628-1.8628L.9183 13.4249c-.278-.2779-.4795-.4794-.6197-.6528l4.9674 1.0303a.5258.5258 0 0 0 .0187.003c.0307.005.0645.0107.0645.0395 0 .0313-.037.0457-.0682.0576l-.0144.0063zM.0132 11.932a1.2519 1.2519 0 0 1 .0563-.3098c.0927-.2917.3443-.5434.8488-1.0478l2.0906-2.0906a1361.7196 1361.7196 0 0 0 2.8955 4.1855c.017.0226.0357.0476.0163.0664-.0914.1008-.1828.211-.2473.3305a.1001.1001 0 0 1-.0313.0388c-.008.005-.0169.003-.0262.0013h-.0013l-5.6014-1.175zm3.5553-4.0078l2.811-2.811c.2641.1157 1.2256.522 2.0856.885.651.2754 1.2443.5258 1.4308.6071.0188.0076.0357.015.0439.0338.005.0113.0025.0257 0 .0376a1.2537 1.2537 0 0 0 .3273 1.1442c.0188.0188 0 .0457-.0163.0689l-.0088.0131-2.8542 4.421c-.0075.0124-.0144.023-.0269.0312-.015.0094-.0363.005-.0538.0006a1.4234 1.4234 0 0 0-.34-.0463c-.1026 0-.214.0188-.3266.0395h-.0007c-.0125.0019-.0238.0044-.0338-.0031a.1314.1314 0 0 1-.0281-.032zm3.3787-3.3788l3.6391-3.639c.504-.5039.7562-.7561 1.0478-.8481a1.2519 1.2519 0 0 1 .755 0c.2916.092.5438.3442 1.0477.848l.7887.7888-2.5882 4.0084a.097.097 0 0 1-.0257.03c-.0156.0107-.0375.0063-.0563 0a1.3126 1.3126 0 0 0-1.2018.2316c-.0169.0176-.042.0075-.0632-.0019-.338-.147-2.967-1.258-3.343-1.4177zm7.8278-2.3009l2.3898 2.3898-.5758 3.5665v.0094a.0845.0845 0 0 1-.005.0238c-.0063.0125-.0188.015-.0313.0188a1.1454 1.1454 0 0 0-.343.1709.0964.0964 0 0 0-.0125.0106c-.007.0075-.0138.0144-.025.0157a.0714.0714 0 0 1-.027-.0044l-3.6416-1.5473-.007-.0031c-.0231-.0094-.0506-.0207-.0506-.0445a1.3758 1.3758 0 0 0-.194-.5727c-.0176-.0288-.037-.0588-.022-.0883zm-2.461 5.3868l3.4138 1.446c.0188.0087.0394.0168.0476.0362a.0663.0663 0 0 1 0 .0357.848.848 0 0 0-.0188.1646v.0958c0 .0238-.0244.0338-.047.0432l-.0069.0025c-.5408.231-7.5924 3.238-7.603 3.238-.0107 0-.022 0-.0326-.0107-.0188-.0188 0-.0451.0169-.0689a.4757.4757 0 0 0 .0087-.0125l2.8054-4.344.005-.0074c.0163-.0263.035-.0557.0651-.0557l.0282.0043c.0638.0088.1202.017.1771.017.4257 0 .82-.2072 1.0579-.5615a.1001.1001 0 0 1 .0212-.025c.017-.0126.042-.0063.0614.0024zm-3.9095 5.7492l7.6863-3.278s.0113 0 .022.0106c.0419.042.0776.0701.112.0964l.0169.0107c.0156.0088.0313.0188.0325.035 0 .0063 0 .01-.0013.0157l-.6584 4.0447-.0025.0163c-.0044.0313-.0088.067-.0382.067a1.0822 1.0822 0 0 0-.8594.5301l-.0031.005c-.0088.0144-.017.0282-.0313.0357-.0131.0063-.03.0038-.0438.0006L8.5064 13.706c-.0063-.0013-.0952-.3249-.102-.3255z"/></svg>
      <span slot="product">Netlify</span>
      <span slot="text">It deploys websites</span>
      </ObjCard>
      <ObjCard>
      <svg
      class="filter group-hover:text-[#172B4D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Jira</title>
      <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005zm5.723-5.756H5.736a5.215 5.215 0 0 0 5.215 5.214h2.129v2.058a5.218 5.218 0 0 0 5.215 5.214V6.758a1.001 1.001 0 0 0-1.001-1.001zM23.013 0H11.455a5.215 5.215 0 0 0 5.215 5.215h2.129v2.057A5.215 5.215 0 0 0 24 12.483V1.005A1.001 1.001 0 0 0 23.013 0Z"/></svg>
      <span slot="product">Jira</span>
      <span slot="text">It's Trello, on Steroids</span>
      </ObjCard>
      <ObjCard>
      <svg 
      class="filter group-hover:text-[#172B4D] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Confluence</title>
      <path d="M.87 18.257c-.248.382-.53.875-.763 1.245a.764.764 0 0 0 .255 1.04l4.965 3.054a.764.764 0 0 0 1.058-.26c.199-.332.454-.763.733-1.221 1.967-3.247 3.945-2.853 7.508-1.146l4.957 2.337a.764.764 0 0 0 1.028-.382l2.364-5.346a.764.764 0 0 0-.382-1 599.851 599.851 0 0 1-4.965-2.361C10.911 10.97 5.224 11.185.87 18.257zM23.131 5.743c.249-.405.531-.875.764-1.25a.764.764 0 0 0-.256-1.034L18.675.404a.764.764 0 0 0-1.058.26c-.195.335-.451.763-.734 1.225-1.966 3.246-3.945 2.85-7.508 1.146L4.437.694a.764.764 0 0 0-1.027.382L1.046 6.422a.764.764 0 0 0 .382 1c1.039.49 3.105 1.467 4.965 2.361 6.698 3.246 12.392 3.029 16.738-4.04z"/></svg>
      <span slot="product">Confluence</span>
      <span slot="text">Google Docs, on Steroids</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#000] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Notion</title>
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>
      <span slot="product">Notion</span>
      <span slot="text">Like Confluence and Jira had a baby</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#4353FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Webflow</title>
      <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a4778.8 4778.8 0 0 0-1.484-11.473c-3.316 0-5.089 2.36-6.026 4.851l-2.565 6.637c-.015-.476-.36-6.565-.36-6.565-.204-3.052-3-4.91-5.262-4.91l2.739 16.6c3.474-.015 5.347-2.361 6.328-4.852 0 0 2.09-5.398 2.176-5.643.015.23 1.5 10.494 1.5 10.494 3.488 0 5.362-2.202 6.37-4.606L24 3.708c-3.445 0-5.261 2.346-6.198 4.851Z"/></svg>
      <span slot="product">Webflow</span>
      <span slot="text">Modern Websites (without code)</span>
      </ObjCard>
      <ObjCard>
      <svg 
      class="filter group-hover:text-[#18BFFF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Airtable</title>
      <path d="M11.992 1.966c-.434 0-.87.086-1.28.257L1.779 5.917c-.503.208-.49.908.012 1.116l8.982 3.558a3.266 3.266 0 0 0 2.454 0l8.982-3.558c.503-.196.503-.908.012-1.116l-8.957-3.694a3.255 3.255 0 0 0-1.272-.257zM23.4 8.056a.589.589 0 0 0-.222.045l-10.012 3.877a.612.612 0 0 0-.38.564v8.896a.6.6 0 0 0 .821.552L23.62 18.1a.583.583 0 0 0 .38-.551V8.653a.6.6 0 0 0-.6-.596zM.676 8.095a.644.644 0 0 0-.48.19C.086 8.396 0 8.53 0 8.69v8.355c0 .442.515.737.908.54l6.27-3.006.307-.147 2.969-1.436c.466-.22.43-.908-.061-1.092L.883 8.138a.57.57 0 0 0-.207-.044z"/></svg>
      <span slot="product">Airtable</span>
      <span slot="text">Database Operations without the hassle</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#458CF5] group-hover:drop-shadow-lg drop-shadow w-12 h-12 mx-2 my-5 fill-current"
      role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Google Search Console</title>
      <path d="M8.548 1.156L6.832 2.872v1.682h1.716zm0 3.398v.035H6.832v-.035H3.386L0 7.844v3.577h2.826V8.94c0-.525.429-.954.954-.954h16.476c.525 0 .954.43.954.954v2.48h2.754V7.844l-3.386-3.29H17.3v.035h-1.717v-.035zm7.035 0H17.3V2.872l-1.717-1.716zM8.679 1.188V2.84h6.773V1.188zm11.471 7.07a.834.834 0 00-.132.01l-.543.002c-5.216.014-10.432-.008-15.648.01-.435-.063-.794.436-.716.883v2.264h17.812c-.016-.888.045-1.782-.034-2.666-.104-.342-.427-.502-.739-.502zm-15.422.634a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zm2.134 0a.689.698 0 01.689.698.689.698 0 01-.689.697.689.698 0 01-.688-.697.689.698 0 01.688-.698zM.036 11.645v9.156c0 1.05.858 1.908 1.907 1.908h.883V11.645zm21.174 0v11.064h.882c1.05 0 1.908-.858 1.908-1.908v-9.156zM4.057 13.133v6.85h6.137v-6.85zm13.243.021v3.777l-1.708.977-1.708-.977v-3.758a4.006 4.006 0 000 7.23v2.441h3.457v-2.442a4.006 4.006 0 00-.041-7.248zm-13.243 8.26v1.43h7.925v-1.43z"/></svg>
      <span slot="product">Search Console</span>
      <span slot="text">How SEO babies are made.</span>
      </ObjCard>
    </div>
  </div>
</section>
<section class="dark:bg-coolGray-800 dark:text-coolGray-100 mx-8">
  <div class="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
    <h2 class="text-3xl sm:text-4xl font-bold">Creative Tools of choice</h2>
    <div class="flex flex-wrap justify-center lg:justify-between">
      <ObjCard>
      <i
      class="fab fa-figma fa-3x filter group-hover:text-[#F24E1E] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      title="Figma"
      alt="Figma"
      ></i>
      <span slot="product">Figma</span>
      <span slot="text">Vector graphics and prototyping!</span>
      </ObjCard>
      <ObjCard>
      <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="filter group-hover:text-[#9999FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      >
      <title>Adobe Premiere Pro</title>
      <path d="M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z"/></svg>
      <span slot="product">Premiere Pro</span>
      <span slot="text">It's a video editor... That's all it does</span>
      </ObjCard>
      <ObjCard>
        <img 
        src="https://theme.zdassets.com/theme_assets/9876708/2993b0431fd68dc0833b90ae5fd545b066c257e8.png" 
        alt="Descript's Logo"
        class="grayscale brightness-0 transition duration-200 group-hover:drop-shadow-lg -translate-y-1 group-hover:brightness-100 group-hover:grayscale-0 filter mx-2 my-auto w-11 h-11" height="24" width="24"/>
        <span slot="product">Descript</span>
      <span slot="text">A video editor that edits like a doc!</span>
      </ObjCard>
      <ObjCard>
      <svg role="img"       
      class="filter group-hover:text-[#9999FF] group-hover:drop-shadow-lg drop-shadow w-12 ml-2 mr-4 my-5 fill-current"
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Adobe After Effects</title>
      <path d="M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z"/></svg>
      <span slot="product">After Effects</span>
      <span slot="text">Visual effects, and animations</span>
      </ObjCard>
      <ObjCard>
      <svg 
      class="filter group-hover:text-[#31A8FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-5 fill-current"
      role="img" viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Adobe Lightroom</title>
      <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-6.99 16.389c0 .051-.029.09-.06.121-.03.02-.06.029-.101.029H6.26c-.11 0-.16-.061-.16-.18V6.44c-.01-.07.04-.13.11-.14h2c.05-.01.11.03.11.08v8.43h4.62c.101 0 .131.049.11.14l-.29 1.739zm6.25-7.859v1.95c0 .08-.05.11-.16.11-.649-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14h-1.95c-.08.01-.15-.04-.16-.119V11.14c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.061-.66-.01-.05.02-.1.07-.11.01-.01.02-.01.04 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23.02.1.039.21.05.31.01.11.021.23.021.36.299-.35.66-.64 1.069-.86.46-.25.97-.37 1.49-.36.069-.01.13.04.14.11.001.01.001.02.001.04z"/></svg>
      <span slot="product">Lightroom</span>
      <span slot="text">The secret to making photos prettier</span>
      </ObjCard>
      <ObjCard>
        <svg       
      class="filter group-hover:text-[#31A8FF] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"
      role="img" viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Adobe Photoshop</title>
      <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"/></svg>
      <span slot="product">Photoshop</span>
      <span slot="text">Photo manipulation, you know it</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#FF9A00] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"
      role="img" viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Adobe Illustrator</title>
      <path d="M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"/></svg>
      <span slot="product">Illustrator</span>
      <span slot="text">Vector Illustrations, made easier</span>
      </ObjCard>
      <ObjCard>
      <svg 
      class="filter group-hover:text-[#231F20] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Buffer</title>
      <path d="M1.371 5.476L11.943 0l10.686 5.476-10.686 5.495zm3.36 4.81l7.212 3.547 7.288-3.547 3.398 1.655-10.686 5.202L1.371 11.94zm0 6.171l7.212 3.911 7.288-3.91 3.398 1.815L11.943 24 1.371 18.273z"/></svg>
      <span slot="product">Buffer</span>
      <span slot="text">Social Media Tool for scheduling posts</span>
      </ObjCard>
      <ObjCard>
      <svg       
      class="filter group-hover:text-[#143059] group-hover:drop-shadow-lg drop-shadow w-12 h-12 ml-2 mr-4 my-auto sm:my-5 fill-current"
      role="img" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg">
      <title>Hootsuite</title>
      <path d="M12.002 0h.023c1.311.004 2.603.322 3.766.928C16.948.332 18.23.022 19.532.022h.676V24l-.656-.002C15.369 24 11.356 22.336 8.4 19.373 5.43 16.43 3.77 12.414 3.791 8.23V.021h.677c1.301 0 2.586.311 3.741.906C9.381.318 10.682 0 12.002 0zm0 .654c-1.381 0-2.676.373-3.791 1.021-1.138-.655-2.428-1.001-3.742-1h-.022V8.23c-.025 8.35 6.764 15.09 15.107 15.113V.675h-.022c-1.313-.001-2.604.343-3.743.999-1.144-.666-2.443-1.018-3.766-1.02h-.021zm3.252 2.754c1.79.002 3.238 1.453 3.237 3.242-.003 1.791-1.454 3.238-3.244 3.236-.616 0-1.22-.176-1.739-.508l-1.516 1.508-1.507-1.516c-1.514.952-3.515.495-4.465-1.02-.952-1.516-.495-3.516 1.021-4.467s3.516-.494 4.467 1.022c.273.437.44.933.483 1.446l.016-.02.015.018c.154-1.667 1.556-2.945 3.232-2.941zM8.76 8.789c1.192.006 2.163-.959 2.168-2.15.001-.219-.031-.436-.096-.644-.243.544-.882.788-1.426.546-.545-.244-.79-.883-.546-1.428.109-.243.304-.437.548-.547-1.137-.355-2.347.276-2.705 1.414-.066.207-.099.424-.1.642-.003 1.192.96 2.163 2.153 2.167h.004zm6.478.019c1.193.003 2.163-.962 2.166-2.155s-.963-2.162-2.155-2.164c-.216-.002-.431.03-.638.094.545.244.789.883.547 1.428-.244.543-.883.787-1.428.545-.245-.109-.439-.307-.549-.553-.355 1.139.279 2.352 1.417 2.707.209.063.423.097.64.098z"/>
      </svg>
      <span slot="product">Hootsuite</span>
      <span slot="text">Every column is a social media feed!</span>
      </ObjCard>
      <ObjCard>
      <i
      class="fab fa-hubspot transition duration-200 stroke-3 group-hover:text-orange-400 group-hover:drop-shadow-lg fa-3x filter drop-shadow w-12 h-12 ml-2 mr-4 my-auto fill-current"
      title="hubspot"
      alt="hubspot"
      ></i>
      <span slot="product">Hubspot</span>
      <span slot="text">CRMs, it's not just for sales</span>
      </ObjCard>
    </div>
  </div>
</section>