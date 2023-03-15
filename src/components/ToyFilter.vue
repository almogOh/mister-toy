<template>
    <div class="toy-filter">
        <section class="toy-filter-container">
            <input class="input" type="text" placeholder="Search" v-model="filterBy.name" @input="setFilterName">
        </section>
    </div>
</template>

<script>
export default {
    name: 'ToyFilter',
    data() {
        return {
            filterBy: {
                name: "",
                labels: [],
                inStock: false,
                sortBy: {},
                page: 0,
            },
        }
    },
    methods: {
        //TODO::: LABELS
        setFilterName() {
            this.$emit("setFilter", { ...this.filterBy })
        },
    },
    components: { 
    }
}
</script>

