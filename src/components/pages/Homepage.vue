<script setup>
import Plus from '@/assets/images/homepage/plus.svg';

// Categories
import Sofas from '@/assets/images/homepage/categories/Sofas.png';
import Cupboards from '@/assets/images/homepage/categories/Cupboards.png';
import Tables from '@/assets/images/homepage/categories/Tables.png';
import Beds from '@/assets/images/homepage/categories/Beds.png';
import Floor from '@/assets/images/homepage/categories/Floor.png';
import Commode from '@/assets/images/homepage/categories/Commode.png';
import Shelving from '@/assets/images/homepage/categories/Shelving.png';

import GreenArrow from '@/assets/images/homepage/green_arrow.png';
</script>
<template>
    <div class="container">
        <div class="home-blocks">
            <div class="home-blocks__column">
                <div class="home-block">
                    <img :src="Sofas" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Sofas</router-link>
                    </div>
                </div>
                <div class="home-block">
                    <img :src="Tables" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Tables</router-link>
                    </div>
                </div>
                <div class="home-block">
                    <img :src="Floor" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Floor</router-link>
                    </div>
                </div>
                <div class="home-block">
                    <img :src="Commode" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Commode</router-link>
                    </div>
                </div>
            </div>
            <div class="home-blocks__column">
                <div class="home-block">
                    <img :src="Cupboards" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Cupboards</router-link>
                    </div>
                </div>
                <div class="home-block">
                    <img :src="Beds" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Beds</router-link>
                    </div>
                </div>

                <div class="home-block home-block__discount">
                    <h2 class="discount__text">
                        Get 10% Discount
                    </h2>
                    <div class="discount__desc small-text">
                        Get 10% discount with notified about the latest news and updates, no spam, we proise!
                    </div>
                    <div class="discount__form">
                        <input type="email" placeholder="Enter your email address" name="discount"/>
                        <img class="email-icon" :src="GreenArrow"/>
                    </div>
                </div>

                <div class="home-block">
                    <img :src="Shelving" />
                    <div class="home-block__link">
                        <img :src="Plus" />
                        <router-link to="/category/3">Shelving</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-subscribe">
            <div class="home-subscribe__column">
                <h4>Join our newsletter for £10 off</h4>
                <div class="home-subscribe__desc">
                    We'll email you a voucher worth £10 off your first order over £50.
                    By subscribing you agree to our
                    Terms & Conditions and Privacy & Cookies Policy.
                </div>
            </div>
            <div class="home-subscribe__column">
                <div class="home-subscribe__form">
                    <input type="email" placeholder="Enter your email address" name="subscribe"/>
                    <img class="email-icon" :src="GreenArrow"/>
                </div>
            </div>
        </div>
    </div>
</template>
