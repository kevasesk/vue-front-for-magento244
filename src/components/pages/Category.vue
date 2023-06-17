<script setup>
import Filters from '@/components/pages/category/Filters.vue'
import Compare from '@/components/pages/category/Compare.vue'
import Wishlist from '@/components/pages/category/Wishlist.vue'

import Listing from '@/components/pages/category/Listing.vue'

</script>
<template>
    <div class="container">
        <div class="category-products">
            <div class="sidebar">
                <Filters/>
                <Compare/>
                <Wishlist/>
            </div>
            <Listing/>
        </div>
    </div>
</template>
