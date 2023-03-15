<template>
  <main class="toy-index">
    <h1>Toys</h1>

    <div class="toy-index-header">

      <RouterLink class="index-add-btn" to="/toys/edit/"> <el-button type="success">Add</el-button></RouterLink>
      <ToyFilter @setFilter="setFilter" />
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
