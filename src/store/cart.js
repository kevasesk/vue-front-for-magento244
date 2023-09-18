import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useProductStore } from '@/store/product'
import { useNotyStore } from '@/store/noty'
import { useRouter } from 'vue-router';
import { api } from '@/helpers/api'

import {
    CREATE_CART,
    ADD_SIMPLE_TO_CART,
    ADD_CONFIGURABLE_TO_CART,
    GET_CART_ITEMS,
    UPDATE_CART_ITEMS,
    REMOVE_ITEM_FROM_CART,
    COUNTRIES,
    SET_GUEST_EMAIL,
    SET_SHIPPING_ADDRESS,
    SET_BILLING_ADDRESS,
    SET_SHIPPING,
    SET_PAYMENT,
    PLACE_ORDER
} from '@/graphql/cart'
import {REMOVE_PRODUCT_FROM_CART} from "../graphql/cart";

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
        selected_payment: null,
        selectedOptionValueIndex: [],
        quantities: [],
        product: useProductStore(),

        country: null,
        region: null,
        zip: null
    }),
    actions: {
        async initItems(){
            await this.getCartToken().then(async token => {
                if (!token) {
                    this.noty.show('No cart token in localStorage. on init items', 'error');
                    return;
                }

                await api(GET_CART_ITEMS, {
                    cartId: token
                }).then(response => {
                    this.data = response.data.cart.items;
                    this.payments = response.data.cart.available_payment_methods;
                    //this.shipping = response.data.cart.shipping_addresses[0].available_shipping_methods;
                    this.totals = response.data.cart.prices;
                    this.data.forEach((item) => {
                        this.quantities[item.uid] = item.quantity;
                    });
                });

                await api(COUNTRIES).then(response => {
                    this.countries = response.data.countries;
                });
            });
        },
        async addToCartSimple(qty, sku){
            let token = await this.getCartToken();
            await api(ADD_SIMPLE_TO_CART, {
                cartId: token,
                sku,
                qty
            }, 'mutate').then(response => {
                this.noty.show('Items added to cart', 'success');
            });

        },
        async update(){
            let token = await this.getCartToken();
            let newQuantities = [];
            this.data.forEach((item) => {
                newQuantities.push({
                    cart_item_uid: item.uid,
                    quantity: this.quantities[item.uid]
                });
            });
            await api(UPDATE_CART_ITEMS, {
                cartId: token,
                cartItems: newQuantities,
            }, 'mutate').then(response => {
                window.location.reload();
                this.noty.show('Items updated!', 'success');
            }).catch(error => {
                console.log(error);
            });
        },
        async addToCartConfigurable(sku, qty){
            let token = await this.getCartToken();
            let simpleSku = this.findSkuByAttributes(
                this.selectedOptionValueIndex['color'],
                this.selectedOptionValueIndex['size'],
            );
            let options = [
                this.selectedOptionValueIndex['color'],
                this.selectedOptionValueIndex['size'],
            ].filter(item => item != null);
            await api(ADD_CONFIGURABLE_TO_CART, {
                cartId: token,
                qty: qty,
                sku: simpleSku,
                parentSku: this.product.currentProduct.sku,
                selectedOptions: options
            }, 'mutate').then(response => {
                this.noty.show('Items added to cart', 'success');
            }).catch(error => {
                console.log(error);
            });
        },
        async deleteItem(item){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(REMOVE_PRODUCT_FROM_CART,{
                cartId: token,
                cartItemId: item.id
            }, 'mutate').then(response => {
                window.location.reload();
                this.noty.show('Items removed from cart', 'success');
            }).catch(error => {
                console.log(error);
                this.noty.show('Error', 'error');
            });
        },
        async setShippingAddress() {
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(SET_SHIPPING_ADDRESS, {
                cartId: token,
                firstname: this.address.firstname,
                lastname: this.address.lastname,
                street: this.address.street,
                city: this.address.city,
                region: this.address.region,
                postcode: this.address.postcode,
                countryCode: this.address.country,
                telephone: this.address.telephone
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });

            await api(SET_BILLING_ADDRESS, {
                cartId: token,
                firstname: this.address.firstname,
                lastname: this.address.lastname,
                street: this.address.street,
                city: this.address.city,
                region: this.address.region,
                postcode: this.address.postcode,
                countryCode: this.address.country,
                telephone: this.address.telephone
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });
        },
        async setGuestEmail(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(SET_GUEST_EMAIL, {
                cartId: token,
                email: this.email
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });
        },
        async setShipping(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(SET_SHIPPING, {
                cartId: token,
                carrierCode: this.selected_shipping_carrier,
                methodCode: this.selected_shipping_method
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });
        },
        async setPayment(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(SET_PAYMENT, {
                cartId: token,
                code: this.selected_payment
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });
        },
        async placeOrder(){
            let token = localStorage.getItem(CART_TOKEN_NAME);
            await api(PLACE_ORDER, {
                cartId: token,
                // carrierCode: this.selected_shipping_carrier,
                // methodCode: this.selected_shipping_method,
                // paymentCode: this.selected_payment,
            }, 'mutate').then(response => {
                console.log(response);//ysemenov
            });
        },
        async getCartToken(){
            let token = localStorage.getItem(CART_TOKEN_NAME);

            if (token) {
                return token;
            }

            await api(CREATE_CART, {}, 'mutate').then(response => {
                if (response.data.createEmptyCart) {
                    localStorage.setItem(CART_TOKEN_NAME, response.data.createEmptyCart);
                    token = localStorage.getItem(CART_TOKEN_NAME);
                }
            });

            return token;
        },

        findSkuByAttributes(colorValue, sizeValue = null) {
            if (colorValue && sizeValue) {
                for (const variant of this.product.currentProduct.variants) {
                    if (variant.product.color === colorValue && variant.product.size === sizeValue) {
                        return variant.product.sku;
                    }
                }
            }

            for (const variant of this.product.currentProduct.variants) {
                if (variant.product.color === colorValue) {
                    return variant.product.sku;
                }
            }

            return null;
        },
    },
})
