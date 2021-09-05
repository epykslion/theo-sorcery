<script>
  let videos = [
    {
      title: "Cheong Kwan Jang Ninjas",
      client: "Beat Nation",
      tag: ["comedy", "commercial", "visual effects"],
      caption:
        "A parody commercial commissioned for the South Korean Ginseng company, Korea Ginseng Corporation",
      id: "LSXGokGMxLc",
      alt: "A box of Cheong Kwan Jang Korean Ginseng, sitting pleasantly on a fluffy red pillow. #totallynotsellingout",
    },
    {
      title: "I Wanna Dance With Somebody",
      client: "An Honest Mistake",
      tag: "music video",
      caption:
        "Whitney Houston's Classic, performed by Malaysian Pop Punk band, An Honest Mistake",
      id: "teGZOg8Ne74",
      alt: "I Wanna Dance With Somebody, covered by An Honest Mistake, featuring Haziq from I Lost The Plot",
    },
    //{ title: '', client: '', tag: '', caption: '', href: '', src: '', alt: '' }
  ];
</script>

<header>
  <div>
    <div
      class="container flex flex-col items-center px-4 py-12 pb-24 mx-auto text-center lg:pb-56 md:py-8 md:px-10 lg:px-32"
    >
      <h1
        class="relative z-10 pb-6 text-4xl font-black leading-tight text-center text-gray-800 sm:text-5xl md:text-6xl tracking-snug sm:leading-snug md:leading-tight"
      >
        We don't just make content
        <br />
        <span class="relative inline-flex">
          <span
            aria-hidden="false"
            class="absolute inset-0 inline transform scale-75 md:scale-95 -translate-x-1 bg-red-300 -rotate-2"
          />

          <span class="relative">We design experiences</span>
        </span>
      </h1>
      <p
        class="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-3xl dark:text-coolGray-900"
      />
      <div class="flex flex-wrap justify-center">
        <a href="/contact">
          <button
            class="px-8 py-3 m-2 text-lg font-semibold bg-gray-900 rounded btn hover:bg-gray-700"
            >Get in touch</button
          >
        </a>
        <a href="/about">
          <button
            class="px-8 py-3 m-2 text-lg text-gray-600 border-2 border-gray-600 rounded btn btn-outline"
            >Learn more</button
          >
        </a>
      </div>
    </div>
  </div>
  <div
    class="container flex items-center justify-center transition duration-300 group hover:scale-95"
  >
    <p
      class="absolute text-2xl hidden md:text-5xl top-0 font-extrabold text-gray-700 md:top-20 group-hover:block"
    >
      The portfolio is still being built,<br />please come back shortly
    </p>
    <img
      src="/photos/osakajo/osakajo-5.webp"
      alt=""
      class="w-5/6 mx-auto mb-12 -mt-20 transition duration-300 rounded-lg shadow-md group-hover:opacity-40 lg:-mt-48"
    />
  </div>
</header>

<section class="relative">
  <div class="max-w-screen-xl mx-auto">
    <div class="px-6" />
  </div>
  <!--What I do-->
  <div class="container px-8 py-8 mx-auto">
    <h2 class="MD:text-5xl text-4xl text-center text-gray-900 text-extrabold">
      So what do I do?
    </h2>
    <p class="mt-2 text-[1.3rem] text-center">Well, check them out yourself:</p>
    <ol class="flex flex-col text-xl lg:flex-row lg:-mx-4">
      <li
        class="flex flex-col p-8 mt-8 bg-white rounded transition duration-300 shadow lg:w-1/3 lg:mx-4 hover:scale-105 hover:shadow-xl"
      >
        <picture class="mb-4 text-center">
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.webp"
            type="image/webp"
          />
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.png"
          />
          <img
            alt="Content Consultancy"
            src="https://vexilo-crm.s3.amazonaws.com/assets/Diagnostico.png"
          />
        </picture>
        <p class="text-xl">01</p>
        <h3 class="my-2.5 font-semibold text-2xl">Content Creation</h3>
        <p class="">We design content that <strong>actually</strong> matter to your audience.</p>
      </li>
      <li
        class="flex transition duration-300 flex-col p-8 mt-8 bg-white rounded shadow lg:w-1/3 lg:mx-4 hover:scale-105 hover:shadow-xl"
      >
        <picture class="mb-4 text-center">
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Diseno@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diseno.webp"
            type="image/webp"
          />
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Diseno@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Diseno.png"
          />
          <img
            alt="Web Design"
            src="https://vexilo-crm.s3.amazonaws.com/assets/Diseno.png"
          />
        </picture>
        <p class="text-xl">02</p>
        <h3 class="text-2xl my-2.5 font-semibold">Web Development</h3>
        <p class="mb-0">
          Using only the best, each product developed is catered specifically to <strong
            >your</strong
          > needs.
        </p>
      </li>
      <li
        class="flex transition duration-300 flex-col p-8 mt-8 bg-white rounded shadow lg:w-1/3 lg:mx-4 hover:scale-105 hover:shadow-xl"
      >
        <picture class="mb-4 text-center">
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo@2x.webp 2x, https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.webp"
            type="image/webp"
          />
          <source
            srcset="https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo@2x.png 2x, https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.png"
          />
          <img
            alt="Strategy Development"
            src="https://vexilo-crm.s3.amazonaws.com/assets/Desarrollo.png"
          />
        </picture>
        <p class="text-xl">03</p>
        <h4 class="text-2xl font-semibold my-2.5">Strategy Development</h4>
        <p class="mb-0">
          Always having the right tools for the job, identifying and simplifying your problems is what we do best!
        </p>
      </li>
    </ol>
  </div>
  <div class="relative mx-3 my-2">
    <h3
      class="text-3xl font-extrabold leading-8 tracking-tight text-left text-gray-900 lg:text-center sm:text-4xl sm:leading-10"
    >
      Ready to take the next step?
    </h3>
    <p
      class="max-w-3xl mx-auto mt-4 text-xl leading-7 text-left text-gray-500 lg:text-center"
    >
      Let's talk and see what we can do together
    </p>
    <form class="container flex items-center justify-center mx-auto my-4 w-7xl">
      <div class="flex flex-row">
        <input
          type="text"
          placeholder="example@email.com"
          class="md:w-3/5 p-3 rounded sm:w-2/3"
        />
        <button
          type="button"
          class="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-coolGray-900"
          >Subscribe</button
        >
      </div>
    </form>
  </div>
</section>
