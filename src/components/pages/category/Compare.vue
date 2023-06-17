<script setup>
import CrossIcon from '@/assets/images/cross.svg';
</script>
<template>
    <div class="compare-container">
        <h3>Compare Products <span class="tiny-text items-count">(2 items)</span></h3>
        <div class="compare-products">
            <div class="compare-product">
                <img class="cross" :src="CrossIcon"/>
                <div class="title">
                    <a href="/" class="small-text">Summit Watch</a>
                </div>
            </div>
            <div class="compare-product">
                <img class="cross" :src="CrossIcon"/>
                <div class="title">
                    <a href="/" class="small-text">Cruise Dual Analog Watch</a>
                </div>
            </div>
        </div>
        <div class="compare__actions">
            <div class="compare button-text">Compare</div>
            <div class="clear-all small-text"><a href="/">Clear All</a></div>
        </div>
    </div>
</template>
