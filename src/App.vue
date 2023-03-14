<template>
  <section class="main">
    <AppHeader />
    <RouterView />
    <AppFooter />
    <UserMessage />
  </section>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import UserMessage from './components/UserMessage.vue'
export default {
  name: 'App',
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  components: {
    AppHeader,
    AppFooter,
    UserMessage,
  },
}
</script>

