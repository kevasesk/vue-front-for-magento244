<script setup>
import ArrowDown from '@/assets/images/arrow_down.svg';
</script>
<template>
    <div class="filters">
        <h3>Shopping Options</h3>
        <div class="filters-container">
            <div class="filter">
                <div class="filter-title">Style</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
            <div class="filter">
                <div class="filter-title">Category</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
            <div class="filter">
                <div class="filter-title">Style</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
            <div class="filter">
                <div class="filter-title">Size</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
            <div class="filter">
                <div class="filter-title">Price</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
            <div class="filter">
                <div class="filter-title">Color</div>
                <div class="filter-values"></div>
                <img :src="ArrowDown"/>
            </div>
        </div>
    </div>
</template>
