import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useRouter } from 'vue-router';
import { useNotyStore } from '@/store/noty'

import { GET_PRODUCT, CREATE_REVIEW } from '@/graphql/product'

import { api } from '@/helpers/api'
import gql from 'graphql-tag'

export const useProductStore = defineStore('product', {
    state: () => ({
        currentProduct: null,
        noty: useNotyStore(),
        tabs: [
            {
                key: 'description',
                title: 'Description',
                type: 'text'
            },
            {
                key: 'sizes',
                title: 'Sizes',
                type: 'sizes'
            },
            {
                key: 'reviews',
                title: 'Reviews',
                type: 'reviews'
            }
        ],
        activeTabs: {},
        reviewForm: {
            nickname: '',
            summary: '',
            review: '',
        }
    }),
    actions: {
        async initProduct(sku) {
            await api(GET_PRODUCT, {
                sku: sku,
            }).then(response => {
                this.currentProduct = response.data.products.items[0];
                const page = usePageStore();
                page.setTitle(this.currentProduct.name);
            });
        },
        getTabAttribute(key) {
            return this.currentProduct[key].html || '';
        },
        async addReview(event){
            event.preventDefault();
            const { nickname, summary, review } = this.reviewForm;
            await api(CREATE_REVIEW, {
                nickname: nickname,
                //ratingValue: 3,//TODO stars
                summary: summary,
                text: review,
                sku: this.currentProduct.sku
            }, 'mutate').then(async (response) => {
                console.log(response);//ysemenov
               // window.location.reload();
                this.noty.show('Review created!', 'success');
            }).catch(error => {
                this.noty.show(error, 'error');
                console.log(error);//ysemenov
            });
        }
    },
})
