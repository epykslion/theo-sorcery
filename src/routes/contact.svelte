
<svelte:head>
  <title>Get in touch</title>
</svelte:head>
<div class="flex flex-col items-center justify-center w-screen">
  <h1 class="mb-4 text-3xl font-semibold text-gray-600 md:text-4xl">
    Like what you see?<br /><span class="text-lg md:text-2xl"> Book a free consultation today!</span>
  </h1>
<section class="p-6">
	<form novalidate name="contact" method="POST" data-netlify="true" class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow-lg filter drop-shadow bg-coolGray-50 ng-untouched ng-pristine ng-valid">
		<h2 class="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label for="name" class="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required class="block w-full border-0 shadow-md p-2 rounded focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800">
		</div>
		<div>
			<label for="email" class="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required class="block w-full border-0 shadow-md p-2 rounded focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800">
		</div>
		<div>
			<label for="message" class="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." class="block md:w-96 w-full border-0 shadow-md p-2 rounded autoexpand focus:outline-none focus:ring-0 focus:ring-opacity-25 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:bg-coolGray-800"></textarea>
		</div>
		<div>
			<button type="submit" class="w-full px-4 py-2 font-bold rounded shadow-md focus:outline-none focus:ring hover:ring-0 focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 focus:drop-shadow-xl focus:-translate-y-0.5 transition duration-200 hover:drop-shadow dark:text-coolGray-900">Send</button>
		</div>
	</form>
</section>
</div>
