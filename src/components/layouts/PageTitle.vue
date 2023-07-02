<script setup>
import Breadcrumbs from './Breadcrumbs.vue'
import { usePageStore } from "@/store/page";

const page = usePageStore()
</script>
<template>
    <div class="page-title" style='background-image: url("/src/assets/images/page_thumbnail.png");'>
        <div class="container">
            <Breadcrumbs/>
            <h1>{{page.title}}</h1>
        </div>
    </div>
</template>
