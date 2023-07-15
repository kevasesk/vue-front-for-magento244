import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useNotyStore } from '@/store/noty'
import { useRouter } from 'vue-router';

import {
    CREATE_CART,
    ADD_SIMPLE_TO_CART,
    GET_CART_ITEMS,
    REMOVE_ITEM_FROM_CART,
    COUNTRIES,
    SET_GUEST_EMAIL,
    SET_SHIPPING_ADDRESS,
    SET_BILLING_ADDRESS,
    SET_SHIPPING,
    SET_PAYMENT,
    PLACE_ORDER
} from '@/graphql/cart'

import ApolloClient from 'apollo-boost'

const CART_TOKEN_NAME = 'cartToken';

export const useCartStore = defineStore('cart', {
    state: () => ({
        data: null,
        email: 'john@gmail.com',
        payments: [],
        shipping: [],
        totals: null,
        countries: [],
        noty: useNotyStore(),
        address: {
            firstname: 'John',
            lastname: 'Doe',
            company: 'Compnay 1',
            street: ['SOme street 4'],
            city: 'Kharkiv',
            region: '1',
            postcode: '123',
            country: 'US',
            telephone: '+380777777777'
        },
        selected_shipping_carrier: null,
        selected_shipping_method: null,
        selected_payment: null
    }),
    actions: {
        async initItems(){
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await this.getCartToken().then(async token => {
                if (!token) {
                    this.noty.show('No cart token in localStorage. on init items', 'error');
                    return;
                }

                await apolloClient.query({
                    query: GET_CART_ITEMS,
                    variables: {
                        cartId: token
                    }
                }).then(response => {
                    console.log(response.data.cart);//ysemenov
                    this.data = response.data.cart.items;
                    this.payments = response.data.cart.available_payment_methods;
                    this.shipping = response.data.cart.shipping_addresses[0].available_shipping_methods;
                    this.totals = response.data.cart.prices;
                });

                await apolloClient.query({
                    query: COUNTRIES
                }).then(response => {
                    this.countries = response.data.countries;
                });
            });
        },
        async addToCart(sku, qty) {
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            let token = await this.getCartToken();
            await apolloClient.mutate({
                mutation: ADD_SIMPLE_TO_CART,
                variables: {
                    cartId: token,
                    sku,
                    qty
                }
            }).then(response => {
                this.noty.show('Items added to cart', 'success');
            });

        },
        async setShippingAddress() {
            let token = localStorage.getItem(CART_TOKEN_NAME);
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: SET_SHIPPING_ADDRESS,
                variables: {
                    cartId: token,
                    firstname: this.address.firstname,
                    lastname: this.address.lastname,
                    street: this.address.street,
                    city: this.address.city,
                    region: this.address.region,
                    postcode: this.address.postcode,
                    countryCode: this.address.country,
                    telephone: this.address.telephone
                }
            }).then(response => {
                console.log(response);//ysemenov
            });

            await apolloClient.mutate({
                mutation: SET_BILLING_ADDRESS,
                variables: {
                    cartId: token,
                    firstname: this.address.firstname,
                    lastname: this.address.lastname,
                    street: this.address.street,
                    city: this.address.city,
                    region: this.address.region,
                    postcode: this.address.postcode,
                    countryCode: this.address.country,
                    telephone: this.address.telephone
                }
            }).then(response => {
                console.log(response);//ysemenov
            });
        },
        async setGuestEmail(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: SET_GUEST_EMAIL,
                variables: {
                    cartId: token,
                    email: this.email
                }
            }).then(response => {
                console.log(response);//ysemenov
            });
        },
        async setShipping(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: SET_SHIPPING,
                variables: {
                    cartId: token,
                    carrierCode: this.selected_shipping_carrier,
                    methodCode: this.selected_shipping_method
                }
            }).then(response => {
                console.log(response);//ysemenov
            });
        },
        async setPayment(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: SET_PAYMENT,
                variables: {
                    cartId: token,
                    code: this.selected_payment
                }
            }).then(response => {
                console.log(response);//ysemenov
            });
        },
        async placeOrder(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: PLACE_ORDER,
                variables: {
                    cartId: token,
                    // carrierCode: this.selected_shipping_carrier,
                    // methodCode: this.selected_shipping_method,
                    // paymentCode: this.selected_payment,
                }
            }).then(response => {
                console.log(response);//ysemenov
            });
        },
        async getCartToken(){
            let token = localStorage.getItem(CART_TOKEN_NAME);

            if (token) {
                return token;
            }

            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: CREATE_CART
            }).then(response => {
                if (response.data.createEmptyCart) {
                    localStorage.setItem(CART_TOKEN_NAME, response.data.createEmptyCart);
                    token = localStorage.getItem(CART_TOKEN_NAME);
                }
            });

            return token;
        }
    },
})
