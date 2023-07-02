<script setup>
import { useCategoryStore } from '@/store/category'
import { onMounted } from "vue";
import { useRoute } from 'vue-router';


import Filters from '@/components/category/Filters.vue'
import Compare from '@/components/category/Compare.vue'
import Wishlist from '@/components/category/Wishlist.vue'

import Listing from '@/components/category/Listing.vue'

const route = useRoute();
const category = useCategoryStore()
onMounted(() => {
    category.fetchCategory(route.params.id)
})
</script>
<template>
    <div class="container">
        <div class="category-products">
            <div class="sidebar">
                <Filters/>
<!--                <Compare/>-->
<!--                <Wishlist/>-->
            </div>
            <Listing/>
        </div>
    </div>
</template>
