<script setup>
defineProps(['dogsBreeds'])
defineEmits(['fetchDogs'])

const open = ref(true)

const handleOpen = () => open.value = !open.value
</script>

<template>
  <div>
    <svg
      class="absolute top-1 left-1 h-14 w-14 text-blue-500"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="handleOpen"
    >
      <g
        id="SVGRepo_bgCarrier"
        stroke-width="0"
      />
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
    <aside
      v-if="open"
      class="bg-neutral-300 lg:hidden z-50 overflow-y-auto overflow fixed w-full lg:w-auto flex-col items-center lg:sticky top-0 p-5 h-screen"
    >
      <span
        class="p-2 text-2xl mb-5 cursor-pointer font-bold bg-black/30 rounded-full"
        @click="handleOpen"
      >X</span>
      <h2 class="text-center font-mono text-2xl">
        Breeds list
      </h2>
      <ul class="grid grid-cols-2 gap-x-8 my-5 gap-y-2 text-lg">
        <li
          v-for="breed in dogsBreeds"
          :key="breed"
          class="cursor-pointer hover:text-blue-500 transition-colors"
          @click="$emit('fetchDogs', breed); handleOpen()"
        >
          {{ breed }}
        </li>
      </ul>
    </aside>
    <aside
      class="bg-neutral-300 hidden z-50 overflow-y-auto overflow fixed w-full lg:w-auto lg:flex flex-col items-center lg:sticky top-0 p-5 h-screen"
    >
      <h2 class="text-center font-mono text-2xl">
        Breeds list
      </h2>
      <ul class="grid grid-cols-2 gap-x-8 my-5 gap-y-2 text-lg">
        <li
          v-for="breed in dogsBreeds"
          :key="breed"
          class="cursor-pointer hover:text-blue-500 transition-colors"
          @click="$emit('fetchDogs', breed); handleOpen()"
        >
          {{ breed }}
        </li>
      </ul>
    </aside>
  </div>
</template>