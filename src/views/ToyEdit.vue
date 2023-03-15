<template>
    <section v-if="toy" class="toy-edit">
        <h1>Edit Item</h1>
        <form @submit.prevent="saveToy" class="edit-form">
            <img class="toy-edit-img" :src="toy.imgUrl">

            <div class="toy-edit-add">
            <i class="addName">Name: </i><input class="inputName" v-model="toy.name" type="text">
            <i class="addPrice">Price: </i><input class="inputPrice" v-model="toy.price" type="text">
            <i class="addStock">In Stock: </i><input class="inputStock" v-model="toy.inStock" type="number">
            </div>
        </form>
        
        <button @click="$router.push('/toys')" class="edit-cancel-btn">Cancel</button>
        <button class="edit-save-btn">Save</button>
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
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
                    toyService.getById(toyId).then(toy => {
                        console.log(toy)
                        return (this.toy = toy)
                        
                    })
                        
                } else {
                    this.toy = toyService.getEmptyToy()
                }
            },
            immediate: true,
        },
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'saveToy', toy: this.toy })
                .then(toy => {
                    showSuccessMsg("Done")
                    this.$router.push('/toys')
                })
                .catch(err => {
                    showErrorMsg("Error")
                })
        },
    },
}
</script>