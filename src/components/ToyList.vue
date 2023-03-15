<template>
    <ul v-if="toys.length" class="toy-list">
        <ToyPreview :key="toy._id" v-for="toy in toys" :toy="toy" @removed="$emit('removed', toy._id)"/>
    </ul>
    <p v-else>There are no toys for now</p>
</template>

<script>
import ToyPreview from './ToyPreview.vue'

export default {
    name: 'ToyList',
    props: {
        toys: Array,
        required: true,
        default: [],
    },
    components: {
        ToyPreview,
    },
}
</script>
