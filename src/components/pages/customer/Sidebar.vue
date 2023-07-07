<template>
    <div class="links">
        <ul>
            <li><router-link to="/account">Account Dashboard</router-link></li>
            <li><router-link to="/account-orders">My Orders</router-link></li>
            <li><router-link to="/wishlist">My Wishlist</router-link></li>
            <li><router-link to="/subs">Newsletter Subscriptions</router-link></li>
            <li><a @click="customer.logout">Logout</a></li>
        </ul>
    </div>
</template>
