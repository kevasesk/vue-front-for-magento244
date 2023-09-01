import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import Category from '@/components/pages/Category.vue'
import Product from '@/components/pages/Product.vue'
import Page from '@/components/pages/Page.vue'
import NewCustomer from '@/components/pages/customer/NewCustomer.vue'
import Login from '@/components/pages/customer/Login.vue'
import Dashboard from '@/components/pages/customer/Dashboard.vue'
import Wishlist from '@/components/pages/customer/Wishlist.vue'
import Subs from '@/components/pages/customer/Subs.vue'
import Orders from '@/components/pages/customer/Orders.vue'
import Cart from '@/components/checkout/Cart.vue'
import CheckoutFirst from '@/components/checkout/CheckoutFirst.vue'
import Homepage from '@/components/pages/Homepage.vue'

import NotFound from '@/components/pages/NotFound.vue'

const routes = [
    { path: '/', component: Homepage, name: 'homepage' },
    { path: '/home', redirect: { name: 'homepage' } },
    { path: '/category', redirect: { name: 'homepage' } },
    { path: '/category/:id', component: Category },
    { path: '/product/', redirect: { name: 'homepage' } },
    { path: '/product/:sku', component: Product, name: 'product' },
    { path: '/registration', component: NewCustomer },
    { path: '/login', component: Login, name: 'login' },
    { path: '/account', component: Dashboard, name:'account', meta: { requiresAuth: true } },
    { path: '/wishlist', component: Wishlist, name:'wishlist', meta: { requiresAuth: true } },
    { path: '/subs', component: Subs, name:'subs', meta: { requiresAuth: true } },
    { path: '/account-orders', component: Orders, name:'account-orders', meta: { requiresAuth: true } },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: CheckoutFirst },
    { path: '/page', redirect: { name: 'NotFound' }},
    { path: '/page/:pageUrl', component: Page },

    { path: '/404', component: NotFound, name: 'NotFound' }
]

function isAuthenticated() {
    const token = localStorage.getItem('customerToken');
    return token !== null && token !== undefined;
}

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record?.meta?.requiresAuth)) {
        if (!isAuthenticated()) {
            next({ name: 'login' });
        } else {
            next();
        }
    } else {
        next();
    }
});



const app = createApp(App)
const pinia = createPinia();
app.config.errorHandler = (err, instance, info) => {
   console.error(err, instance, info);//ysemenov
}
app.use(router)
app.use(pinia)
app.mount('#app')
/*
plan
- display data on existing pages
- config dynamic routing
- add notification window for success or errors messages
- add to cart action
- add to shipping action
- add to billing action
- add to order action
- add filers logic
- add customer session logic
- search


*/
