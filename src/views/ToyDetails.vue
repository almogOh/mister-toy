<template>
    <section v-if="toy" class="toy-details">
        {{ toy }}
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
export default {
    name: 'ToyDetails',
    watch: {
        '$route.params': {
            handler() {
                const { toyId } = this.$route.params
                toyService
                    .getById(toyId)
                    .then(toy => (this.toy = toy))
            },
            immediate: true,
        },
    },
    data() {
        return {
            toy: null,
        }
    },
}
</script>