import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useRouter } from 'vue-router';

import { GET_PRODUCT, CREATE_REVIEW } from '@/graphql/product'

import { api } from '@/helpers/api'
import gql from 'graphql-tag'

export const useProductStore = defineStore('product', {
    state: () => ({
        data: null,
    }),
    actions: {
        async initProduct(sku) {
            await api(GET_PRODUCT, {
                sku: sku,
            }).then(response => {
                this.data = response.data.products.items[0];
                const page = usePageStore();
                page.setTitle(this.data.name);
            });
        },
    },
})
