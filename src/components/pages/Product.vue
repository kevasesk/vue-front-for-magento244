<script setup>
import {useRoute} from "vue-router";
import {useProductStore} from "@/store/product";
import {useCartStore} from "@/store/cart";
import {onMounted, ref} from "vue";

import Breadcrumbs from '@/components/product/Breadcrumbs.vue'

import ProductImage from '@/assets/images/product_main_image.png';
import ProductImagePreview from '@/assets/images/product_image_preview.png';

const route = useRoute();
const product = useProductStore()
const cart = useCartStore()
const qty = ref(1);
onMounted(() => {
    product.initProduct(route.params.sku)
})
</script>
<template>
    <div class="container">
        <Breadcrumbs/>
        <div class="product-container" v-if="product.data">
            <div class="product-container__gallery">
                <img :src="ProductImage"/>
                <img class="preview-image" :src="ProductImagePreview"/>
                <img class="preview-image" :src="ProductImagePreview"/>
                <img class="preview-image" :src="ProductImagePreview"/>
                <!--<img class="preview-image" :src="product.data.image.url"/>-->
            </div>
            <div class="product-container__short-info">
                <h2>{{product.data.name}}</h2>
                <div class="product-container__reviews">
                    <span>3 reviews</span>
                    <a href="#">Add Your Review</a>
                </div>
                <div class="product-container__price-stock">
                    <div class="product-container__price">
                        As low as
                        {{product.data.stock_status}}
                    </div>
                    <div class="product-container__stock">
                        <h2>
                            {{product.data.price_range.minimum_price.regular_price.currency}}
                            {{product.data.price_range.minimum_price.regular_price.value}}
                        </h2>
                        SKU#:  <b>{{product.data.sku}}</b>
                    </div>
                </div>
                <div class="product-container__qty">
                    Quantity: <input type="number" v-model="qty">
                </div>
                <div class="product-container__add-to-cart">
                    <button class="green-button" type="button" @click.prevent="cart.addToCart(product.data.sku, qty)">Add to Cart</button>
                </div>
                <div class="product-container__actions">
                    <a href="#">Add to wishlist</a>
                </div>
            </div>
            {{product.data}}
        </div>
    </div>
</template>
