<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import { usePageStore } from "@/store/page";
import { useRoute } from 'vue-router';

const page = usePageStore()
const route = useRoute();
</script>
<template>
    <div class="page-title" style='background-image: url("/src/assets/images/page_thumbnail.png");' v-show="route.name != 'product'">
        <div class="container">
            <Breadcrumbs/>
            <h1>{{page.title}}</h1>
        </div>
    </div>
</template>
