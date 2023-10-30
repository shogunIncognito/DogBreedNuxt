<script setup>
definePageMeta({
  middleware: 'auth'
})

onBeforeMount(() => {
  if (window.localStorage.getItem('session')) {
    useState('session', () => ({ user: JSON.parse(window.localStorage.getItem('session')).user }))
    navigateTo('/dashboard')
    return
  }
  useState('session', () => ({ user: null }))
})

const testUser = {
  username: 'admin',
  password: 'admin',
}

const values = ref({
  username: '',
  password: '',
})

const login = () => {
  if (values.value.username === testUser.username && values.value.password === testUser.password) {
    useState('session', () => ({ user: values.value.username }))
    window.localStorage.setItem('session', JSON.stringify({ user: values.value.username }))
    navigateTo('/dashboard')
    return
  }
  alert('Wrong username or password')
}

</script>

<template>
  <section class="flex flex-col lg:flex-row h-screen w-full bg-gray-100">
    <aside class="lg:w-3/12 my-8 w-full flex justify-center items-center">
      <form
        class="bg-white p-5 w-4/5 rounded shadow-md"
        @submit.prevent="login"
      >
        <h1 class="text-3xl font-semibold mb-4">
          Log in
        </h1>
        <div class="mb-4">
          <label
            for="username"
            class="block text-sm font-medium text-gray-700"
          >Nombre de usuario</label>
          <input
            id="username"
            v-model="values.username"
            type="text"
            class="w-full p-2 border rounded"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-sm font-medium text-gray-700"
          >Contraseña</label>
          <input
            id="password"
            v-model="values.password"
            type="password"
            class="w-full p-2 border rounded"
            required
          >
        </div>
        <button
          type="submit"
          class="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
      </form>
    </aside>
    <img
      class="object-cover h-full lg:w-3/4"
      src="https://source.unsplash.com/1920x1080/?dog"
      alt="dogologin"
    >
  </section>
</template>