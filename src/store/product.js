import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useRouter } from 'vue-router';

import { GET_PRODUCT } from '@/graphql/product'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'

export const useProductStore = defineStore('product', {
    state: () => ({
        data: null,
    }),
    actions: {
        async initProduct(sku) {
            const apolloClient = new ApolloClient({ uri: '/api/graphql' });
            await apolloClient.query({
                query: GET_PRODUCT,
                variables: {
                    sku: sku,
                }
            }).then(response => {
                this.data = response.data.products.items[0];
                const page = usePageStore();
                page.setTitle(this.data.name);
                console.log(response);//ysemenov
                console.log(this.data);//ysemenov
            });

        },
    },
})
