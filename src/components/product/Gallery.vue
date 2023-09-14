<script setup>
import {useProductStore} from "@/store/product";
import {ref} from "vue";

import GalleryArrow  from '@/assets/images/product/gallery_arrow_2.png';

const product = useProductStore()
const currentIndex = ref(0)

function left(){
    if(currentIndex.value > 0){
        currentIndex.value = --currentIndex.value;
    } else {
        currentIndex.value = product.currentProduct.media_gallery.length - 1;
    }
}
function right(){
    if(currentIndex.value < product.currentProduct.media_gallery.length - 1){
        currentIndex.value = ++currentIndex.value;
    } else {
        currentIndex.value = 0;
    }
}
function changePreview(index){
    currentIndex.value = index;
}
</script>
<template>
    <div class="product-container__gallery" v-if="product.currentProduct.media_gallery">
        <div class="gallery-main">
            <img :src="GalleryArrow" class="product-container__actions-left" @click="left"/>
            <img :src="GalleryArrow" class="product-container__actions-right" @click="right"/>

            <img :src="product.currentProduct.media_gallery[currentIndex].url"/>
        </div>

        <div class="gallery-previews">
            <template v-for="(image, index) in product.currentProduct.media_gallery" :key="image.url">
                <img class="preview-image" :src="image.url" :data-index="index" @click="changePreview(index)"/>
            </template>
        </div>
    </div>
</template>

