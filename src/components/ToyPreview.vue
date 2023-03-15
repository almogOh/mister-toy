<template>
    <div class="toy-preview-container">
        <li class="toy-preview">
            <p class="toy-preview-name">{{ toy.name }}</p>

            <img class="toy-preview-img" :src="toy.imgUrl">
                
            <p class="toy-preview-price">Price: {{ toy.price }}</p>
            <div class="toy-preview-routers">
                <button @click="$emit('removed')" class="preview-close-btn"><i class="fa-regular fa-circle-xmark"></i></button>
                <RouterLink :to="'/toys/edit/' + toy._id" class="preview-edit-rlink">
                    <span>Edit</span>
                </RouterLink>
                <RouterLink :to="'/toys/details/' + toy._id" class="preview-details-rlink">
                    <span>Details</span>
                </RouterLink>
            </div>
        </li>
    </div>
</template>

<script>
export default {
    name: 'ToyPreview',
    emits: ['removed'],
    props: {
        toy: Object,
    },
}
</script>

