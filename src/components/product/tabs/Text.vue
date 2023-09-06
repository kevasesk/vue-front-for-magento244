<script setup>
import {useProductStore} from "@/store/product";
const product = useProductStore()
const props = defineProps([
    'attributeKey'
])
</script>
<template>
    <div v-html="product.getTabAttribute(props.attributeKey)"></div>
</template>
