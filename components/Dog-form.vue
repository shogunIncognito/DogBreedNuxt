<script setup>
defineEmits(['fetchDogs'])
const breed = ref('')
</script>

<template>
  <section class="bg-slate-50 p-3 shadow rounded lg:w-1/2">
    <form
      class="flex"
      @submit.prevent="$emit('fetchDogs', breed)"
    >
      <input
        id="breed"
        v-model="breed"
        placeholder="Enter a dog breed"
        type="text"
        class="w-full hover:border-blue-200 focus:border-blue-500 transition-colors p-2 border-b-2 outline-none rounded-l-md"
      >
      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-800 transition-colors text-white p-3 rounded-r-md"
      >
        Search
      </button>
    </form>
  </section>
</template>