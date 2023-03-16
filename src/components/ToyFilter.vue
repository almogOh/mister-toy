<template>
    <div class="toy-filter">
        <section class="toy-filter-container">
            <input id="search-inp" class="toy-filter-input" type="text" placeholder="Search" v-model="filterBy.name" @input="setFilterName">
            <label for="search-inp" class="fa-solid fa-magnifying-glass filter-input-icon"></label>
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

