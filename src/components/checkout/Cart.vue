<script setup>
import {useCartStore} from "@/store/cart";
import DeleteIcon from '@/assets/images/cart/delete.svg';
import {onMounted, ref} from "vue";

const cart = useCartStore()
onMounted(() => {
    cart.initItems()
})

</script>
<template>
    <div class="container">
        <div class="cart-container">
            <div class="products-container">
                <div class="products-grid">
                    <div class="products-grid__head">
                        <span>Item</span>
                        <span>Price</span>
                        <span>Qty</span>
                        <span>Subtotal</span>
                        <span>Action</span>
                    </div>
                    <div class="products-grid__row" v-for="item in cart.data">
                        <div class="products-grid__product">
                            <img :src="item.product.image.url" class="products-grid__product-image"/>
                            <div class="products-grid__product-info">
                                <router-link
                                    :to="`/product/${item.product.sku}`"
                                    class="products-grid__link"
                                >
                                    {{ item.product.name }}
                                </router-link>
                                <div class="attributes">
                                    <span v-if="item.product.size">
                                        <span class="attributes__title">Size:</span>
                                        <span class="attributes__value">{{item.product.size}}</span>
                                    </span>
                                    <span v-if="item.product.color">
                                        <span class="attributes__title">Color:</span>
                                        <span class="attributes__value">{{item.product.color}}</span>
                                    </span>
                                    <span>
                                        <span class="attributes__title">Sku:</span>
                                        <span class="attributes__value">{{item.product.sku}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <span class="product-grid__price">
                            ${{ item.product.price.regularPrice.amount.value.toFixed(2) }}
                        </span>
                        <span class="product-grid__qty">
                            <input type="text" v-model="cart.quantities[item.uid]"/>
                        </span>
                        <span class="product-grid__subtotal">
                           ${{ (item.product.price.regularPrice.amount.value * item.quantity).toFixed(2) }}
                        </span>
                        <div class="product-row__delete">
                            <img :src="DeleteIcon" @click="cart.deleteItem(item)"/>
                        </div>
                    </div>
                </div>
                <div class="cart-actions">
                    <div @click="cart.update" class="cart-actions__update">
                        Update Shopping Cart
                    </div>
                </div>
            </div>
            <div class="totals-container">
                <h3>Summary</h3>

                <span>Country</span>
                <select name="country" v-if="cart.countries" v-model="cart.country">
                    <option :value="index" v-for="(country, index) in cart.countries">{{country.full_name_english}}</option>
                </select>

                <span v-if="cart.countries[country]">State/Province</span>
                <select name="state" v-if="cart.countries[country]" v-model="cart.region">
                    <option :value="region.code" v-for="region in cart.countries[country].available_regions">{{region.name}}</option>
                </select>

                <span>Zip/Postal Code</span>
                <input type="text" name="zip" v-model="cart.zip"/>

                <template v-for="payment in cart.payments">
                    <span>{{ payment.title }}</span>
                    <div class="totals-payment">
                        <input  class="totals-payment__radio" type="radio" name="payment">
                        <label class="totals-payment__label">Fixed $5.00</label>
                    </div>
                </template>

                <div class="final-totals" v-if="cart.totals">
                    <span class="left">Subtotal</span>
                    <span class="right">
                        $ {{ cart.totals.subtotal_including_tax.value.toFixed(2) }}
                    </span>

                    <span class="left">Order Total</span>
                    <span class="right">
                        $ {{ cart.totals.grand_total.value.toFixed(2) }}
                    </span>
                </div>
                <div class="grand-total">
                    <span class="left">Grand Total</span>
                    <span class="right">
                        $ {{ cart.totals.grand_total.value.toFixed(2) }}
                    </span>
                </div>
                <router-link to="/checkout" class="totals-checkout-button green-button">Proceed to Checkout</router-link>
            </div>

        </div>
    </div>
</template>
