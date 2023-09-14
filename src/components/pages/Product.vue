<script setup>
import {useRoute} from "vue-router";
import {useProductStore} from "@/store/product";
import {useCartStore} from "@/store/cart";
import {onMounted, ref} from "vue";

import Breadcrumbs from '@/components/product/Breadcrumbs.vue'
import Gallery from '@/components/product/Gallery.vue'
import Tabs from '@/components/product/Tabs.vue'

import Star from '@/assets/images/star.svg';
import StarActive from '@/assets/images/star_active.svg';

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
        <div class="product-container" v-if="product.currentProduct">
            <Gallery />
            <div class="product-container__short-info">
                <h2>{{product.currentProduct.name}}</h2>
                <div class="product-container__reviews">
                    <img :src="product.currentProduct.rating_summary >= 20 ? StarActive : Star"/>
                    <img :src="product.currentProduct.rating_summary >= 40 ? StarActive : Star"/>
                    <img :src="product.currentProduct.rating_summary >= 60 ? StarActive : Star"/>
                    <img :src="product.currentProduct.rating_summary >= 80 ? StarActive : Star"/>
                    <img :src="product.currentProduct.rating_summary >= 100 ? StarActive : Star"/>
                    <a href="#review-list" class="product-container__reviews-count tiny-text" @click="product.goToReview()">{{product.currentProduct.review_count}} reviews</a>
                    <a href="#review-form" class="product-container__reviews-link tiny-text" @click="product.goToReview()">Add Your Review</a>
                </div>
                <div class="product-container__price-stock">
                    <div class="product-container__as-low">As low as</div>
                    <div v-if="product.currentProduct.stock_status === 'IN_STOCK'" class="grid-right">
                        <div class="product-container__stock-icon product-container__stock-icon-in-stock"></div>
                        <span class="product-container__stock-text">IN STOCK</span>
                    </div>
                    <div v-if="product.currentProduct.stock_status !== 'IN_STOCK'" class="grid-right">
                        <div class="product-container__stock-icon product-container__stock-icon-out-of-stock"></div>
                        <span class="product-container__stock-text">OUT OF STOCK</span>
                    </div>
                    <div class="product-container__price">
                        {{product.currentProduct.price_range.minimum_price.regular_price.currency}}
                        {{product.currentProduct.price_range.minimum_price.regular_price.value.toFixed(2)}}
                    </div>
                    <div class="product-container__sku grid-right">
                        SKU#:  <b>{{product.currentProduct.sku}}</b>
                    </div>
                </div>
                <div class="product-container__qty">
                    Quantity:
                    <button @click="qty > 0 ? --qty : false;" class="product-container__button-minus">-</button>
                    <input type="text" v-model="qty" maxlength="3">
                    <button @click="++qty;" class="product-container__button-plus">+</button>
                </div>
                <div class="product-container__add-to-cart">
                    <button class="green-button" type="button" @click.prevent="cart.addToCart(product.currentProduct.sku, qty)">Add to Cart</button>
                </div>
                <div class="product-container__actions">
<!--                    <a href="#">Add to wishlist</a>-->
                </div>
            </div>
        </div>
        <Tabs/>
    </div>
</template>
