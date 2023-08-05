<script setup>
import HomepageHeader from '@/components/layouts/HomepageHeader.vue'
import Header from '@/components/layouts/Header.vue'
import PageTitle from '@/components/layouts/PageTitle.vue'
import Footer from '@/components/layouts/Footer.vue'
import Notification from "@/components/layouts/Notification.vue";

import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <HomepageHeader/>
    <Header v-show="route.name != 'homepage'"/>
    <PageTitle v-show="route.name != 'homepage'"/>
    <main>
        <router-view></router-view>
    </main>
    <Footer/>
    <Notification/>
</template>
