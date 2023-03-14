<template>
  <main class="toys-app">
    <h1>Toys</h1>
    <RouterLink class="btn btn-add" to="/toys/edit/">Add</RouterLink>
    <ToyFilter @setFilter="setFilter" />
    <ToyList 
      v-if="toys" 
      :toys="toys" 
      @removed="removeToy" 
    />
  </main>
</template>

<script>
import ToyList from '../components/ToyList.vue';
import ToyFilter from '../components/ToyFilter.vue'
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
