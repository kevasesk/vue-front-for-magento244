<script setup>
import {usePageStore} from "@/store/page";
import {onMounted} from "vue";

const page = usePageStore()
onMounted(() => {
    page.setTitle('404 Not Found')
})
</script>
<template>
    <div class="container">
        <div class="not-found-container">
            <h1>{{page.title}}</h1>
        </div>
    </div>
</template>
