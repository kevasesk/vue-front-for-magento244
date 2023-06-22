<script setup>
import ProductImage from '@/assets/images/product.png';
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
                    </div>
                    <div class="products-grid__row">
                        <div class="products-grid__product">
                            <img :src="ProductImage"/>
                            <div class="products-grid__product-info">
                                <h4>Simple Wood Chair Collection</h4>
                                <div class="attributes">
                                    <span>Size: 29</span>
                                    <span>Color: Green</span>
                                </div>
                            </div>
                        </div>
                        <span class="price">$45.00</span>
                        <span class="qty">1</span>
                        <span class="subtotal">$5.00</span>
                    </div>
                    <div class="products-grid__row">
                        <div class="products-grid__product">
                            <img :src="ProductImage"/>
                            <div class="products-grid__product-info">
                                <h4>Simple Wood Chair Collection</h4>
                                <div class="attributes">
                                    <span>Size: 29</span>
                                    <span>Color: Green</span>
                                </div>
                            </div>
                        </div>
                        <span class="price">$45.00</span>
                        <span class="qty">1</span>
                        <span class="subtotal">$5.00</span>
                    </div>
                </div>
            </div>
            <div class="totals-container">
                <h3>Summary</h3>
                <span>Country</span>
                <select name="country">
                    <option value="uk">UK</option>
                    <option value="uk">UK</option>
                    <option value="uk">UK</option>
                </select>
                <span>State/Province</span>
                <select name="state">
                    <option value="uk">California</option>
                    <option value="uk">California</option>
                    <option value="uk">California</option>
                </select>
                <span>State/Province</span>
                <select name="state">
                    <option value="uk">California</option>
                    <option value="uk">California</option>
                    <option value="uk">California</option>
                </select>
                <span>Zip/Postal Code</span>
                <input type="text" name="zip"/>
                <span>Flat Rate</span>
                <div>
                    <input type="radio" name="flat_rate"><label>Fixed $5.00</label>
                </div>
                <span>Best way</span>

                <div>
                    <input type="radio" name="flat_rate"><label>Best $15.00</label>
                </div>


                <div class="final-totals">
                    <span class="left">Subtotal</span>
                    <span class="right">$45.00</span>

                    <span class="left">Tax</span>
                    <span class="right">$5.00</span>

                    <span class="left">Order Total</span>
                    <span class="right">$50.00</span>
                </div>
                <button class="green-button">
                    Proceed to Checkout
                </button>
            </div>

        </div>
    </div>
</template>
