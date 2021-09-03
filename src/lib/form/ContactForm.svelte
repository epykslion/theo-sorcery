<section class="pb-6 dark:text-coolGray-100">
  <form
    novalidate
    class="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-coolGray-900 ng-untouched ng-pristine ng-valid"
  >
    <h2 class="w-full text-3xl font-bold leading-tight text-gray-600">
      Contact us
    </h2>
    <div>
      <label for="name" class="block text-gray-600 mb-0.5 ml-0.5">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Your name"
        required
        class="block p-2 border-gray-200 rounded shadow w-96 focus:outline-none focus:ring-opacity-25 focus:drop-shadow focus:border-gray-600"
      />
    </div>
    <div>
      <label for="email" class="block mb-0.5 text-gray-600 ml-0.5">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Your email"
        required
        class="block w-full p-2 border-gray-200 rounded shadow focus:outline-none focus:ring-opacity-25 focus:drop-shadow focus:border-gray-600"
      />
    </div>
    <div>
      <label for="message" class="block text-gray-600 mb-0.5 ml-0.5"
        >Message
      </label>
      <textarea
        id="message"
        type="text"
        placeholder="Message..."
        class="block w-full p-2 border-gray-200 rounded shadow autoexpand focus:outline-none focus:ring-opacity-25 focus:drop-shadow focus:border-gray-600"
      />
    </div>
    <div>
      <button
        type="submit"
        class="w-full px-4 py-2 font-bold text-gray-600 rounded shadow-md focus:outline-none hover:shadow-lg focus:drop-shadow-lg"
        >Send</button
      >
    </div>
  </form>
</section>
