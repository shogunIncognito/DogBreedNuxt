<script setup>
defineProps({
  dogs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="masonry sm:masonry-sm md:masonry-md mt-14 md:mx-3 mx-1">
    <article
      v-for="(dog, index) in dogs"
      :key="index"
      class="rounded p-1 grid place-content-center max-w-[400px] break-inside-auto"
    >
      <img        
        :src="dog"
        alt="dogbro"
        class="rounded shadow-2xl"
      >
    </article>
  </section>
</template>
