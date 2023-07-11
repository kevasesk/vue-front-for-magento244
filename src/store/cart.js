import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useNotyStore } from '@/store/noty'
import { useRouter } from 'vue-router';

import { CREATE_CART, ADD_SIMPLE_TO_CART, GET_CART_ITEMS, REMOVE_ITEM_FROM_CART, COUNTRIES } from '@/graphql/cart'

import ApolloClient from 'apollo-boost'

const CART_TOKEN_NAME = 'cartToken';

export const useCartStore = defineStore('cart', {
    state: () => ({
        data: null,
        payments: [],
        totals: null,
        countries: [],
        noty: useNotyStore()
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
                    this.totals = response.data.cart.prices;
                });

                await apolloClient.query({
                    query: COUNTRIES
                }).then(response => {
                    this.countries = response.data.countries;
                    console.log(response);//ysemenov
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
                console.log(this.data);//ysemenov
                // const page = usePageStore();
                // page.setTitle(this.data.name);
                // console.log(response);//ysemenov
                // console.log(this.data);//ysemenov
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
                if (this.data.createEmptyCart) {
                    localStorage.setItem(CART_TOKEN_NAME, this.data.createEmptyCart);
                    token = localStorage.getItem(CART_TOKEN_NAME);
                }

                // const page = usePageStore();
                // page.setTitle(this.data.name);
                // console.log(response);//ysemenov
                // console.log(this.data);//ysemenov
            });

            return token;
        }
    },
})
