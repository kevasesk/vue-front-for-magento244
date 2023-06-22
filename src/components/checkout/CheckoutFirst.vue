<script setup>
import ActiveStep from '@/assets/images/active_step.png';
import PassiveStep from '@/assets/images/passive_step.png';
</script>
<template>
    <div class="container">
        <div class="checkout-first">
            <div class="steps-navigator">

                <img :src="ActiveStep"/>
                <span>Shipping</span>

                <img :src="PassiveStep"/>
                <span>Review & Payments</span>

                <img :src="PassiveStep"/>
                <span>Success</span>

            </div>
            <div class="checkout-container">
                checkout-container
            </div>
        </div>
    </div>
</template>
