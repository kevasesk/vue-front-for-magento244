<script>

//Components
import Menu from '@/components/layouts/header/Menu.vue'

// Icons
import SearchIcon from '@/assets/images/search.svg';
import Logo from '@/assets/images/logo.svg';
import ArrowDownIcon from '@/assets/images/header/arrow_down.svg';
import WishlistIcon from '@/assets/images/header/wishlist.svg';
import CustomerIcon from '@/assets/images/header/customer.svg';
import CartIcon from '@/assets/images/header/cart.svg';

export default {
    components: {
        Menu,
    },
    data() {
        return {
            searchIcon: SearchIcon,
            logo: Logo,

            arrowDown: ArrowDownIcon,
            wishlistIcon: WishlistIcon,
            customerIcon: CustomerIcon,
            cartIcon: CartIcon,
        };
    }
};
</script>
<template>
    <header>
        <div class="container">
            <div class="header-top">
                <div class="search-form">
                    <form action="/" method="GET">
                        <input type="text" name="search" class="small-text" placeholder="Search"/>
                        <img :src="searchIcon" alt="search" class="search-icon"/>
                    </form>
                </div>
                <img :src="logo" class="logo" alt="logo"/>
                <div class="control-panel">
                    <div class="link"><a href="">English <img :src="arrowDown"/></a></div>
                    <div class="link"><a href="">USD <img :src="arrowDown"/></a></div>
                    <div class="link"><img :src="wishlistIcon"/></div>
                    <div class="link"><img :src="customerIcon"/></div>
                    <div class="link"><img :src="cartIcon"/></div>
                </div>
            </div>
            <Menu/>
        </div>
    </header>
</template>
