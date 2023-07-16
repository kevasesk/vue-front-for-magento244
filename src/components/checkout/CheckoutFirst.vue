<script setup>
import ActiveStep from '@/assets/images/active_step.png';
import PassiveStep from '@/assets/images/passive_step.png';
import ArrowDown from '@/assets/images/arrow_down.svg';
import SummaryProductImage from '@/assets/images/summary_product_image.png';

import {useCartStore} from "@/store/cart";
import {usePageStore} from "@/store/page";
import {onMounted} from "vue";
const cart = useCartStore()
const page = usePageStore()
page.setTitle('Checkout')
onMounted(() => {
    cart.initItems()
})
</script>
<template>
    <div class="container">
        <div class="checkout-first">
            <div class="steps-navigator">

                <img :src="ActiveStep"/>
                <span>Shipping & Payments</span>

                <img :src="PassiveStep"/>
                <span>Success</span>

            </div>
            <div class="checkout">
                <section class="checkout__inner">
                    <section class="customer-login">
                        <h3 class="customer-login__title">Customer Login</h3>
                        <form class="customer-login__form" action="#">

                            <div class="customer-login__form-field">
                                <label class="customer-login__field-label">First name *</label>
                                <input class="customer-login__field" type="text"/>
                            </div>

                            <div class="customer-login__form-field">
                                <label class="customer-login__field-label">Password *</label>
                                <input class="customer-login__field" type="password"/>
                            </div>

                            <div class="customer-login__info small-text">
                                <p>You already have an account with us. Sign in or continue as guest.</p>
                            </div>
                            <div class="customer-login__actions">
                                <button class="customer-login__login green-button" type="submit">Login</button>
                                <a class="customer-login__forgot-password" href="#">Forgot Your Password?</a>
                            </div>
                        </form>
                    </section>
                    <hr class="divider"/>
                    <section class="address">
                        <div class="address__form-field">
                            <label class="address__field-label">First name *</label>
                            <input class="address__field" type="text" v-model="cart.address.firstname"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Last Name *</label>
                            <input class="address__field" type="text" v-model="cart.address.lastname"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Email *</label>
                            <input class="address__field" type="text" v-model="cart.email"/>
                        </div>
                        <button class="green-button" @click="cart.setGuestEmail()">set email</button>

                        <div class="address__form-field address__form-field--street">
                            <label class="address__field-label">Street Address *</label>
                            <input class="address__field" type="text" v-model="cart.address.street"/>
                            <input class="address__field" type="text" v-model="cart.address.street"/>
                            <input class="address__field" type="text" v-model="cart.address.street"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Country *</label>
                            <input class="address__field" type="text" v-model="cart.address.country"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">City *</label>
                            <input class="address__field" type="text" v-model="cart.address.city"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Postcode *</label>
                            <input class="address__field" type="text" v-model="cart.address.postcode"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Telephone *</label>
                            <input class="address__field" type="text" v-model="cart.address.telephone"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Region *</label>
                            <select class="address__field" v-model="cart.address.region">
                                <option value="1">UK</option>
                                <option value="2">USA</option>
                            </select>
                        </div>
                        <button class="green-button" @click="cart.setShippingAddress()"> set shipping address</button>
                    </section>
                    <section class="shipping-methods">
                        <h3 class="shipping-methods__title">Shipping Methods</h3>
                        <div class="shipping-methods__items">
                            <div class="shipping-methods__item"  v-for="(shipping, index) in cart.shipping">
                                <span class="shipping-methods__item-input">
                                    <input
                                        class="shipping-methods__item-radio" type="radio"
                                        :data-carrier="shipping.carrier_code"
                                        :data-method="shipping.method_code"
                                        name="shipping"
                                        @click="cart.selected_shipping_carrier = shipping.carrier_code; cart.selected_shipping_method = shipping.method_code"
                                    />
                                    <span class="shipping-methods__item-price">
                                        {{shipping.amount.currency}}
                                        {{shipping.amount.value}}
                                    </span>
                                </span>
                                <span class="shipping-methods__item-name" :data-code="shipping.carrier_code">{{shipping.carrier_title}}</span>
                                <span class="shipping-methods__item-type" :data-code="shipping.method_code">{{shipping.method_title}}</span>
                            </div>
                        </div>
                        <button class="green-button" @click="cart.setShipping()"> set shipping</button>
                    </section>
                    <section class="payment-methods">
                        <h3 class="payment-methods__title">Payment Methods</h3>
                        <div class="payment-methods__items">
                            <div class="payment-methods__item" v-for="(payment, index) in cart.payments">
                                <input
                                    class="payment-methods__item-radio"
                                    type="radio"
                                    name="payment"
                                    :value="payment.code"
                                    v-model="cart.selected_payment"
                                >
                                <span class="payment-methods__item-name">{{ payment.title }}</span>
                            </div>
                        </div>
                        <button class="green-button" @click="cart.setPayment()">Set Payment</button>
                    </section>
                    <section class="checkout-actions">
                        <div class="checkout-actions__wrapper">
                            <router-link class="checkout-actions__back" to="/cart">Back to Cart</router-link>
                            <button class="checkout-actions__place-order green-button" @click="cart.placeOrder()">Place Order</button>
                        </div>
                    </section>
                </section>
                <section class="summary">
                    <div class="summary__inner">
                        <h3 class="summary__title">Order Summary</h3>
                        <div class="summary__items">
                            <div class="summary__items-count menu-text">
                                <span class="summary__items-count-text">2 Item in Cart</span>
                                <span class="summary__items-count-arrow"><img class="arrow" :src="ArrowDown"/></span>
                            </div>
                            <div class="summary__item">
                                <img class="summary__item-img" :src="SummaryProductImage"/>
                                <div class="summary__item-desc">
                                    <a class="summary__item-link" href="#">
                                        Go-Get’r Pushup Grips
                                    </a>
                                    <span class="summary__item-qty">Qty: 3</span>
                                </div>
                                <span class="summary__item-price">$19.00</span>
                            </div>
                            <div class="summary__item">
                                <img class="summary__item-img" :src="SummaryProductImage"/>
                                <div class="summary__item-desc">
                                    <a class="summary__item-link" href="#">
                                        Go-Get’r Pushup Grips
                                    </a>
                                    <span class="summary__item-qty">Qty: 3</span>
                                </div>
                                <span class="summary__item-price">$19.00</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>
