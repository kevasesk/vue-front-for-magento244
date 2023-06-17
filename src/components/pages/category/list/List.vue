<script setup>
import ProductImage from '@/assets/images/product.png';
import StarIcon from '@/assets/images/star.svg';
import ActiveStarIcon from '@/assets/images/star_active.svg';
</script>
<template>
     <div class="product-list">
         <div v-for="index in [1,2,3,4,5,6]" class="product-card">
             <img class="product-image" :src="ProductImage"/>
             <div class="menu-text"><b>Cupboards</b></div>
             <div class="prices">
                 <span class="price"><s>$ 45.00</s></span>
                 <span class="special-price">$ 44.00</span>
             </div>
             <div class="rating">
                 <img :src="ActiveStarIcon"/>
                 <img :src="ActiveStarIcon"/>
                 <img :src="ActiveStarIcon"/>
                 <img :src="StarIcon"/>
                 <img :src="StarIcon"/>
                 <div class="reviews"><a href="#" class="tiny-text">3 reviews</a></div>
             </div>
         </div>
     </div>
</template>
