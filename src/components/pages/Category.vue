<script lang="ts">
import Filters from '@/components/pages/category/Filters.vue'
import Listing from '@/components/pages/category/Listing.vue'

export default {
    components: {
        Filters,
        Listing
    }
}
</script>
<template>
    <div class="container">
        <div class="category-products">
            <Filters/>
            <Listing/>
        </div>
    </div>
</template>
