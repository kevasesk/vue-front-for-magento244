import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

import Category from '@/components/pages/Category.vue'
import Page from '@/components/pages/Page.vue'
import NewCustomer from '@/components/pages/customer/NewCustomer.vue'
import Login from '@/components/pages/customer/Login.vue'
import Dashboard from '@/components/pages/customer/Dashboard.vue'
import Cart from '@/components/checkout/Cart.vue'
import CheckoutFirst from '@/components/checkout/CheckoutFirst.vue'
import Homepage from '@/components/pages/Homepage.vue'

import NotFound from '@/components/pages/NotFound.vue'

const routes = [
    { path: '/', component: Homepage, name: 'homepage' },
    { path: '/home', redirect: { name: 'homepage' } },
    { path: '/category', redirect: { name: 'homepage' } },
    { path: '/category/:id', component: Category },
    { path: '/registration', component: NewCustomer },
    { path: '/login', component: Login },
    { path: '/account', component: Dashboard },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: CheckoutFirst },
    { path: '/page', redirect: { name: 'NotFound' }},
    { path: '/page/:pageUrl', component: Page },

    { path: '/404', component: NotFound, name: 'NotFound' }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(createPinia())
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
