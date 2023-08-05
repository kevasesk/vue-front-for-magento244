<script setup>

//Components
import Menu from '@/components/layouts/header/Menu.vue'
import Socials from '@/components/layouts/homepage/Socials.vue'
import Slider from '@/components/layouts/homepage/Slider.vue'

// Icons
import SearchIcon from '@/assets/images/search.svg';
import Logo from '@/assets/images/logo.svg';
import ArrowDownIcon from '@/assets/images/header/arrow_down.svg';
import WishlistIcon from '@/assets/images/header/wishlist.svg';
import CustomerIcon from '@/assets/images/header/customer.svg';
import CartIcon from '@/assets/images/header/cart.svg';

import { useCustomerStore } from '@/store/customer'
import { useRoute } from 'vue-router';

const customer = useCustomerStore();
const route = useRoute();
</script>
<template>
    <header class="homepage-container" v-show="route.name == 'homepage'">
        <div class="container">
            <div class="header-top">
                <div class="search-form">
                    <form action="/" method="GET">
                        <input type="text" name="search" class="small-text" placeholder="Search"/>
                        <img :src="SearchIcon" alt="search" class="search-icon"/>
                    </form>
                </div>
                <img :src="Logo" class="logo" alt="logo"/>
                <div class="control-panel">
                    <!--                    <div class="link"><a href="">English <img :src="ArrowDownIcon"/></a></div>-->
                    <!--                    <div class="link"><a href="">USD <img :src="ArrowDownIcon"/></a></div>-->
                    <div class="link">
                        <router-link to="/wishlist"><img :src="WishlistIcon"/></router-link>
                    </div>
                    <div class="link" v-if="customer.isLoggedIn">
                        <router-link to="/account"><img :src="CustomerIcon"/></router-link>
                    </div>
                    <div class="link" v-if="!customer.isLoggedIn">
                        <router-link to="/login"><img :src="CustomerIcon"/></router-link>
                    </div>
                    <div class="link" v-if="customer.isLoggedIn">
                        <a href="#" @click="customer.logout">Logout</a>
                    </div>
                    <div class="link">
                        <router-link to="/cart"><img :src="CartIcon"/></router-link>
                    </div>
                </div>
            </div>
            <Menu/>
            <div class="homepage-slider-container">
                <Socials/>
                <Slider/>
            </div>
        </div>
    </header>
</template>
