<script setup>
import ArrowToRight from '@/assets/images/homepage/arrow_right.svg';

import ImageOne from '@/assets/images/homepage/slider/image_one.png';
import ImageTwo from '@/assets/images/homepage/slider/image_two.png';
import ImageThree from '@/assets/images/homepage/slider/image_three.png';
</script>
<template>
    <div class="homepage-slider">
        <div class="slide">
            <div class="slide__column">
                <div class="slide__header"><b>SimpleWood Chair Collection</b></div>
                <div class="slide__desc small-text">Find hand-curated collections that fit your style, space, and budget.</div>
                <button class="slide__action green-button">Shop Now <img :src="ArrowToRight"/></button>
            </div>
            <div class="slide__column">
                <img class="slide__image-one" :src="ImageOne" />
                <img class="slide__image-two" :src="ImageTwo" />
            </div>
            <div class="slide__column">
                <img class="slide__image-three" :src="ImageThree" />
            </div>
        </div>
        <div class="slider-nav">
            <div class="slider-nav__item slider-nav__item-active"></div>
            <div class="slider-nav__item"></div>
            <div class="slider-nav__item"></div>
            <div class="slider-nav__item"></div>
        </div>
    </div>
</template>
