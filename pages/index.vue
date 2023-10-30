<template>
  <section class="w-full flex relative h-screen overflow-hidden bg-gray-100">
    <aside class="p-10 flex flex-col bg-blue-600 h-full justify-center pb-32 text-white w-1/3">
      <h1 class="text-center text-4xl font-semibold p-3 rounded-lg bg-opacity-80">
        &#128054; DogBreedsFetch
      </h1>
      <div class="text-center text-2xl mt-8">
        <p>Wanna see some dogs?</p>
        <p>Click the button below!</p>
      </div>
      <NuxtLink
        to="/login"
        class="text-xl p-2 text-center bg-yellow-400 text-black hover:bg-yellow-600 transition-colors w-2/3 self-center rounded my-5"
      >
        Go
      </NuxtLink>
    </aside>

    <div class="flex-2">
      <img
        class="object-cover h-full w-full"
        src="https://images.dog.ceo/breeds/terrier-russell/iguet3.jpg"
        alt="dogo"
      >
    </div>
  </section>
</template>
