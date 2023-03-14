<template>
  <header>
    <div class="main-header">
      <h1>Header</h1>
      <nav class="main-van">
        <router-link to="/">Home</router-link> |
        <router-link to="/toys">Toys</router-link> |
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
