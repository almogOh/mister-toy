<template>
  <header>
    <div class="main-header">

      <img class="main-logo" src="../assets/img/logo.png">

      <nav class="header-main-nav">
        <button @click="$router.push('/')" class="header-btn">Home</button> |
        <button @click="$router.push('/toys')" class="header-btn">Toys</button> |
        <button @click="$router.push('/about')" class="header-btn">About</button>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
