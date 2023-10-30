<script setup>
definePageMeta({
  middleware: 'auth'
})

const dogsBreeds = ref([])
const dogs = ref([])
const fetchState = ref({
  loading: false,
  firstSearch: true
})

const fetchDogs = async (breed) => {
  try {
    fetchState.value.loading = true
    const { data } = await useFetch(`https://dog.ceo/api/breed/${breed}/images/random/20`)
    dogs.value = data.value.message
  } catch (error) {
    console.error(error);
    dogs.value = []
  } finally {
    fetchState.value.loading = false
    fetchState.value.firstSearch = false
  }
}

// get all breeds
onMounted(async () => {
  const { data } = await useFetch('https://dog.ceo/api/breeds/list/all')
  dogsBreeds.value = Object.keys(data.value.message)
})

</script>

<template>
  <section class="flex flex-col-reverse md:flex-row">
    <BreedsAside
      :dogs-breeds="dogsBreeds"
      @fetch-dogs="fetchDogs"
    />
    <section class="flex w-full my-24 lg:my-10 items-center flex-col">
      <DogForm @fetch-dogs="fetchDogs" />
      <p
        v-if="!fetchState.firstSearch && dogs.length === 0"
        class="text-black text-xl mt-6 font-semibold"
      >
        No dogs found for that breed &#9785;
      </p>
      <LoadingSpinner v-else-if="fetchState.loading" />
      <DogsList
        v-else
        :dogs="dogs"
      />
    </section>
  </section>
</template>

<style>
body {
  @apply bg-slate-200;
}
</style>