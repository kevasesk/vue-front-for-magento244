<script setup>
import Pagination from './Pagination.vue'

import ProductImage from '@/assets/images/product.png';
import StarIcon from '@/assets/images/star.svg';
import ActiveStarIcon from '@/assets/images/star_active.svg';

import { useCategoryStore } from '@/store/category'
const category = useCategoryStore()
</script>
<template>
    <div :class="{'product-list-grid': category.viewType === 'grid' , 'product-list-list': category.viewType === 'list'}">
        <div v-for="product in category.products" class="product-card">
            <img class="product-image" :src="ProductImage"/>
            <div class="product-title black-title">{{product.name}}</div>
            <div class="prices">
                <span class="price"><s>${{product.price.regularPrice.amount.value}}</s></span>
                <span class="special-price black-title"> $ {{product.special_price}}</span>
            </div>
            <div class="rating">
                {{product.categories}}
                {{product.color}}
                <div class="reviews"><a href="#" class="tiny-text">3 reviews</a></div>
            </div>
        </div>
    </div>
    <Pagination/>
</template>
