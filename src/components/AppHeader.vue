<template>
  <header>
    <div class="main-header">

      <img class="main-logo" src="../assets/img/logo.png">

      <nav class="header-main-nav">
        <router-link to="/"><button class="header-btn">Home</button></router-link> |
        <router-link to="/toys"><button class="header-btn">Toys</button></router-link> |
        <router-link to="/about"><button class="header-btn">About</button></router-link>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
