<script setup>
import {useRoute} from "vue-router";
import {useProductStore} from "@/store/product";
import {useCartStore} from "@/store/cart";
import {onMounted, ref} from "vue";

import Breadcrumbs from '@/components/product/Breadcrumbs.vue'
import Gallery from '@/components/product/Gallery.vue'
import Tabs from '@/components/product/Tabs.vue'

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
                    <span>3 reviews</span>
                    <a href="#">Add Your Review</a>
                </div>
                <div class="product-container__price-stock">
                    <div class="product-container__price">
                        As low as
                        {{product.currentProduct.stock_status}}
                    </div>
                    <div class="product-container__stock">
                        <h2>
                            {{product.currentProduct.price_range.minimum_price.regular_price.currency}}
                            {{product.currentProduct.price_range.minimum_price.regular_price.value}}
                        </h2>
                        SKU#:  <b>{{product.currentProduct.sku}}</b>
                    </div>
                </div>
                <div class="product-container__qty">
                    Quantity: <input type="number" v-model="qty">
                </div>
                <div class="product-container__add-to-cart">
                    <button class="green-button" type="button" @click.prevent="cart.addToCart(product.currentProduct.sku, qty)">Add to Cart</button>
                </div>
                <div class="product-container__actions">
                    <a href="#">Add to wishlist</a>
                </div>
            </div>
<!--            {{product.data}}-->
        </div>
        <Tabs/>
    </div>
</template>
