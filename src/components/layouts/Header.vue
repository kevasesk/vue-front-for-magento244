<script setup>

//Components
import Menu from '@/components/layouts/header/Menu.vue'

// Icons
import SearchIcon from '@/assets/images/search.svg';
import Logo from '@/assets/images/logo.svg';
import ArrowDownIcon from '@/assets/images/header/arrow_down.svg';
import WishlistIcon from '@/assets/images/header/wishlist.svg';
import CustomerIcon from '@/assets/images/header/customer.svg';
import CartIcon from '@/assets/images/header/cart.svg';

</script>
<template>
    <header>
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
                    <div class="link"><a href="">English <img :src="ArrowDownIcon"/></a></div>
                    <div class="link"><a href="">USD <img :src="ArrowDownIcon"/></a></div>
                    <div class="link"><img :src="WishlistIcon"/></div>
                    <div class="link"><img :src="CustomerIcon"/></div>
                    <div class="link"><img :src="CartIcon"/></div>
                </div>
            </div>
            <Menu/>
        </div>
    </header>
</template>
