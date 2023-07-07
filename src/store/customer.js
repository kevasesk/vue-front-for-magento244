import { defineStore } from 'pinia'
import { useRouter } from "vue-router";
import { useNotyStore } from '@/store/noty'
import ApolloClient from 'apollo-boost'

const TOKEN_NAME = 'customerToken';

import { GENERATE_CUSTOMER_TOKEN, CUSTOMER, SUBSCRIBE } from '@/graphql/customer'

export const useCustomerStore = defineStore('customer', {
    state: () => ({
        isLoggedIn: false,
        router: useRouter(),
        noty: useNotyStore(),
        customer: null
    }),
    actions: {
        async subscribe(){
            let token = localStorage.getItem(TOKEN_NAME);
            const apolloClient = new ApolloClient({
                uri: '/api/graphql',
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            await apolloClient.mutate({
                mutation: SUBSCRIBE,
                variables: {
                    email: this.customer.email
                }
            }).then(async (response) => {
                console.log(response);//ysemenov
                window.location.reload();
                this.noty.show('Subscribed!', 'success');
            }).catch(error => {
                this.noty.show(error, 'error');
                console.log(error);//ysemenov
            });
        },
        getDefaultShippingAddress(){
            return this.customer.addresses.find(address => address.default_shipping === true);
        },
        getDefaultBillingAddress(){
            return this.customer.addresses.find(address => address.default_billing === true);
        },
        async initCustomer(){
            let token = localStorage.getItem(TOKEN_NAME);
            const apolloClient = new ApolloClient({
                uri: '/api/graphql',
                headers: {
                    Authorization: "Bearer " + token,
                }
            });
            await apolloClient.query({
                query: CUSTOMER,
            }).then(async (response) => {
                this.customer = response.data.customer;
            }).catch(error => {
                this.noty.show(error, 'error');
                console.log(error);//ysemenov
            });
        },
        async login(email, password){
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.mutate({
                mutation: GENERATE_CUSTOMER_TOKEN,
                variables: {
                    email,
                    password
                }
            }).then(async (response) => {
                this.noty.show('Logged in!', 'success');
                let token = response.data.generateCustomerToken.token;
                localStorage.setItem(TOKEN_NAME, token);
                this.isLoggedIn = true;
                this.router.push('/account');
            }).catch(error => {
                this.noty.show(error, 'error');
                console.log(error);//ysemenov
            });
        },
        logout(){
            localStorage.removeItem(TOKEN_NAME);
            this.isLoggedIn = false;
            this.router.push('/login');
            this.noty.show('Logout', 'info');
        }
    },
})
