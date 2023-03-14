<template>
  <header>
    <div class="main-header">

      <h1 class="header-main-title">Pet Shop Toys</h1>

      <nav class="header-main-nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/toys">Toys</router-link> |
        <router-link to="/about">About</router-link>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
