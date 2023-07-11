<script setup>
import {useCartStore} from "@/store/cart";
import ProductImage from '@/assets/images/product.png';
import {onMounted, ref} from "vue";

const cart = useCartStore()
const country = ref(0)
onMounted(() => {
    cart.initItems()
})

</script>
<template>
    <div class="container">
        {{ cart.data }}
        <div class="cart-container">
            <div class="products-container">
                <div class="products-grid">
                    <div class="products-grid__head">
                        <span>Item</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Subtotal</span>
                    </div>
                    <div class="products-grid__row" v-for="item in cart.data">
                        <div class="products-grid__product">
                            <img :src="ProductImage"/>
                            <div class="products-grid__product-info">
                                <h4>
                                    <router-link :to="`/product/${item.product.sku}`">{{ item.product.name }}
                                    </router-link>
                                </h4>
                                <div class="attributes">
                                    <span>Size: 29</span>
                                    <span>Sku: {{ item.product.sku }}</span>
                                </div>
                            </div>
                        </div>
                        <span class="price">
                            {{ item.product.price.regularPrice.amount.currency }}
                            {{ item.product.price.regularPrice.amount.value }}
                        </span>
                        <span class="qty">{{ item.quantity }}</span>
                        <span class="subtotal">
                            {{ item.product.price.regularPrice.amount.currency }}
                            {{ item.product.price.regularPrice.amount.value * item.quantity }}
                        </span>
                    </div>
                </div>
            </div>
            <div class="totals-container">
                <h3>Summary</h3>

                <span>Country</span>
                <select name="country" v-if="cart.countries" v-model="country">
                    <option :value="index" v-for="(country, index) in cart.countries">{{country.full_name_english}}</option>
                </select>

                <span v-if="cart.countries[country]">State/Province</span>
                <select name="state" v-if="cart.countries[country]">
                    <option :value="region.code" v-for="region in cart.countries[country].available_regions">{{region.name}}</option>
                </select>

                <span>Zip/Postal Code</span>
                <input type="text" name="zip"/>

                <template v-for="payment in cart.payments">
                    <span>{{ payment.title }}</span>
                    <div>
                        <input type="radio" :name="payment.code"><label>Fixed $5.00</label>
                    </div>
                </template>

                <div class="final-totals" v-if="cart.totals">
                    <span class="left">Subtotal</span>
                    <span class="right">
                        {{ cart.totals.subtotal_including_tax.currency }}
                        {{ cart.totals.subtotal_including_tax.value }}
                    </span>

                    <span class="left">Order Total</span>
                    <span class="right">
                        {{ cart.totals.grand_total.currency }}
                        {{ cart.totals.grand_total.value }}
                    </span>
                </div>
                <router-link to="/checkout" class="green-button">Proceed to Checkout</router-link>
            </div>

        </div>
    </div>
</template>
