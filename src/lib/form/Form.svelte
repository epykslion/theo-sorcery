<script>
  //Strange Scripts
</script>

<form class="container flex justify-center mt-6">
  <div class="flex flex-col m-2 space-y-4 text-right">
    <label class="text-gray-400" for="name">Name :</label><br />
    <label class="text-gray-400" for="email">Email :</label><br />
    <label class="text-gray-400" for="message">Message :</label><br />
  </div>
  <div class="flex flex-col space-y-2">
    <input
      class="border-2 border-gray-300"
      name="name"
      placeholder="John Doe"
      type="text"
    /><br />
    <input
      class="border-2 border-gray-300"
      name="email"
      placeholder="john@acme.com"
      type="email"
    /><br />
    <input
      class="p-2 border-2 w-88 h-36"
      type="text-area"
      name="message"
      placeholder="Hey, I would like to..."
    /><br />
  </div>
</form>
