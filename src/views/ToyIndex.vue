<template>
  <main class="toy-index">

    <div class="toy-index-header">
      <h1 class="toy-index-title">Shop Now!</h1>
          <div class="toy-index-options">
          <button class="index-add-btn" @click="$router.push('/toys/edit/')" >+ Add</button>
          <ToyFilter @setFilter="setFilter" />
        </div>
    </div>

    <div class="toy-index-list-container">
    <ToyList v-if="toys" :toys="toys" @removed="removeToy" />
    </div>
  </main>
</template>

<script>
import ToyFilter from '../components/ToyFilter.vue'
import ToyList from '../components/ToyList.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    name: 'ToyIndex',
  methods: {
    removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          showSuccessMsg('toy removed')
        })
        .catch(err => {
          showErrorMsg('Cannot remove toy')
        })
    },
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'loadToys', filterBy })
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toysToDisplay
    },
  },
  components: {
    ToyList,
    ToyFilter,
  },
}
</script>
