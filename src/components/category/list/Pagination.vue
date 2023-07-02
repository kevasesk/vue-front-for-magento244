<script setup>
import { useCategoryStore } from '@/store/category'
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
const category = useCategoryStore()
const { pageSize } = storeToRefs(category)
watch(pageSize, async () => category.fetchProducts())
</script>
<template>
    <div class="pagination tiny-text">
        <span>Show</span>
        <select class="list-select" v-model="pageSize">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <span>per page</span>
    </div>
</template>
