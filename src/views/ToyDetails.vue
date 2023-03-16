<template>
    <section v-if="toy" class="toy-details">
        <h1>Details:</h1>
        <img class="toy-details-img" :src="toy.imgUrl">

        <dev class="toy-details-texts">
            <h3>ID: {{ toy._id }}</h3>
            <h3>Name: {{ toy.name }}</h3>
            <h3>Price: {{ toy.price }} ILS</h3>
            <h3>In Stock: {{ toy.inStock }} units</h3>
            <h3>Created At: {{ toy.createdAt }}</h3>
            <h3>{{ getLastLabel() }}</h3>
            <h3>Labels: <template v-for="(label, idx) in toy.labels" :key="idx">
                <span class="toy-details-labels-span" v-if="this.lastLabel !== label">{{label}}, </span>
                <span class="toy-details-labels-span" v-if="this.lastLabel === label">{{label}}. </span>
            </template>
            </h3>
        </dev>

        <button @click="$router.push('/toys')" class="details-back-btn">Back</button>

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
                toyService.getById(toyId)
                    .then(toy => (this.toy = toy))
            },
            immediate: true,
        },
    },
    data() {
        return {
            toy: null,
            lastLabel: null,
        }
    },
    methods: {
        getLastLabel() {
            var lastLabelPos = this.toy.labels.length - 1
            var lastLabel = this.toy.labels[lastLabelPos]
            this.lastLabel = lastLabel
        },
    },
}
</script>