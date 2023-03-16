<template>
    <div class="toy-preview-container">
        <li class="toy-preview">
            <p class="toy-preview-name">{{ toy.name }}</p>

            <img class="toy-preview-img" :src="toy.imgUrl">
                
            <p class="toy-preview-price">Price: {{ toy.price }} ILS</p>
            <div class="toy-preview-btns">
                <button @click="$emit('removed')" class="preview-delete-btn"><i class="fa-solid fa-trash"></i></button>
                <button @click="$router.push('/toys/edit/' + toy._id)" class="preview-edit-btn">Edit</button>
                <button @click="$router.push('/toys/details/' + toy._id)" class="preview-details-btn">Details</button>
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

