<script setup>
import {useProductStore} from "@/store/product";

import Text from '@/components/product/tabs/Text.vue'
import Reviews from '@/components/product/tabs/Reviews.vue'

import TabPlus from '@/assets/images/product/tabs/plus.png';
import CrossPlus from '@/assets/images/product/tabs/cross.png';

const product = useProductStore()
</script>
<template>
    <section class="product-tabs">
        <template v-for="tab in product.tabs">
            <div class="product-tab">
                <div class="product-tab__title" :class="{'product-tab__title-active': product.activeTabs[tab.key]}">
                    <img class="product-tab__icon" :src="TabPlus" @click="product.activeTabs[tab.key] = !product.activeTabs[tab.key]"/>
                    <div class="product-tab__text" @click="product.activeTabs[tab.key] = !product.activeTabs[tab.key]"><b>{{tab.title}}</b></div>
                </div>
                <div class="product-tab__content" v-if="product.activeTabs[tab.key]">
                    <Text v-if="tab.type == 'text'" :attributeKey="tab.key" />
                    <Reviews v-if="tab.type == 'reviews'"/>
                </div>
            </div>
        </template>
    </section>
</template>
