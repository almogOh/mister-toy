<template>
    <section v-if="toy" class="toy-edit">
        <form @submit.prevent="saveToy" class="flex space-between align-center">
            <input v-model="toy.inStock" type="checkbox">
            <input class="input" v-model="toy.name" type="text">
            <input class="input" v-model="toy.price" type="text">
            <button class="btn">Save</button>
        </form>
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
export default {
  name: 'ToyEdit',
    data() {
        return {
            toy: null,
        }
    },
    watch: {
        '$route.params': {
            handler() {
                const { toyId } = this.$route.params
                if (toyId) {
                    toyService.getById(toyId).then(toy => (this.toy = toy))
                } else {
                    this.toy = toyService.getEmptyToy()
                }
            },
            immediate: true,
        },
    },
    methods: {
        saveToy() {
            this.$store
                .dispatch({ type: 'saveToy', toy: this.toy })
                .then(toy => {
                    showSuccessMsg('Added/Updated succssefully')
                    this.$router.push('/toys')
                })
                .catch(err => {
                    showErrorMsg("Couldn't add/update toy")
                })
        },
    },
}
</script>