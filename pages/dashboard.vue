<script setup>
definePageMeta({
  middleware: 'auth'
})

const dogs = ref([])
const fetchState = ref({
  loading: false,
  firstSearch: true
})

const fetchDogs = async (breed) => {
  try {
    fetchState.value.loading = true
    dogs.value = []
    const { data } = await useFetch(`https://dog.ceo/api/breed/${breed}/images/random/20`)
    dogs.value = data.value.message
  } catch (error) {
    console.error(error);
  } finally {
    fetchState.value.loading = false
    fetchState.value.firstSearch = false
  }
}

</script>

<template>
  <section class="flex items-center flex-col my-10">
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
</template>

<style>
body {
  @apply bg-slate-200;
}
</style>