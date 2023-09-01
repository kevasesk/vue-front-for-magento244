<script setup>
import { useCategoryStore } from '@/store/category'
import {onMounted, watch} from "vue";
import { useRoute } from 'vue-router';


import Filters from '@/components/category/Filters.vue'

import Listing from '@/components/category/Listing.vue'
import {storeToRefs} from "pinia";

const route = useRoute();
const category = useCategoryStore()
const query = route.query;

let colors = [];
if (query['Color'] && typeof query['Color'] === 'string') {
    colors = query['Color'].split(',') || [];
}
category.activeFilters['Color'] = colors;

let prices = [];
if (query['Price'] && typeof query['Price'] === 'string') {
    prices = query['Price'].split(',') || [];
}
category.activeFilters['Price'] = prices;

onMounted(() => {
    category.fetchCategory(route.params.id)
    category.fetchAttributes()
})

</script>
<template>
    <div class="container">
        <div class="category-products">
            <div class="sidebar">
                <Filters/>
            </div>
            <Listing/>
        </div>
    </div>
</template>
