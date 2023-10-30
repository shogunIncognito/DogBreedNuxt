/* eslint-disable no-undef */
export default defineNuxtRouteMiddleware(to => {
  const session = useState('session')

  if (!session.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  if (session.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})