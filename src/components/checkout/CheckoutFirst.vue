<script setup>
import ActiveStep from '@/assets/images/active_step.png';
import PassiveStep from '@/assets/images/passive_step.png';
import ArrowDown from '@/assets/images/arrow_down.svg';
import SummaryProductImage from '@/assets/images/summary_product_image.png';

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
                            <input class="address__field" type="text"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Last Name *</label>
                            <input class="address__field" type="text"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Company</label>
                            <input class="address__field" type="text"/>
                        </div>

                        <div class="address__form-field address__form-field--street">
                            <label class="address__field-label">Street Address *</label>
                            <input class="address__field" type="text"/>
                            <input class="address__field" type="text"/>
                            <input class="address__field" type="text"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">Country *</label>
                            <input class="address__field" type="text"/>
                        </div>

                        <div class="address__form-field">
                            <label class="address__field-label">State/Province *</label>
                            <select class="address__field">
                                <option value="1">UK</option>
                                <option value="2">USA</option>
                            </select>
                        </div>

                    </section>
                    <section class="shipping-methods">
                        <h3 class="shipping-methods__title">Shipping Methods</h3>
                        <div class="shipping-methods__items">
                            <div class="shipping-methods__item">
                                <span class="shipping-methods__item-input">
                                    <input class="shipping-methods__item-radio" type="radio" name="shipping"/>
                                    <span class="shipping-methods__item-price">$5.00</span>
                                </span>
                                <span class="shipping-methods__item-name">Fixed</span>
                                <span class="shipping-methods__item-type">Flat rate</span>
                            </div>
                            <div class="shipping-methods__item">
                                <span class="shipping-methods__item-input">
                                    <input class="shipping-methods__item-radio" type="radio" name="shipping"/>
                                    <span class="shipping-methods__item-price">$15.00</span>
                                </span>
                                <span class="shipping-methods__item-name">Not Fixed</span>
                                <span class="shipping-methods__item-type">Flat rate</span>
                            </div>
                        </div>
                    </section>
                    <section class="payment-methods">
                        <h3 class="payment-methods__title">Payment Methods</h3>
                        <div class="payment-methods__items">
                            <div class="payment-methods__item">
                                <span class="shipping-methods__item-input">
                                    <input class="payment-methods__item-radio" type="radio" name="payment"/>
                                    <span class="payment-methods__item-price">$5.00</span>
                                </span>
                                <span class="payment-methods__item-name">Check / Money order</span>
                            </div>
                            <div class="payment-methods__item">
                                 <span class="shipping-methods__item-input">
                                     <input class="payment-methods__item-radio" type="radio" name="payment"/>
                                     <span class="payment-methods__item-price">$ 15.00</span>
                                 </span>
                                <span class="payment-methods__item-name">Not Check / Money order</span>
                            </div>
                        </div>
                    </section>
                    <section class="checkout-actions">
                        <button class="checkout-actions__back">Back</button>
                        <button class="checkout-actions__place-order">Place Order</button>
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
