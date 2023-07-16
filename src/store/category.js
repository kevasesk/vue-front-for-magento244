import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useRouter } from 'vue-router';
import { api } from '@/helpers/api'

import { GET_CATEGORY, GET_CATEGORY_PRODUCT_LISTING } from '@/graphql/category'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categoryId: null,
        title: '',
        url: '',
        path: '',
        image: '',
        products: null,
        sorts: null,
        filters: null,
        activeFilters: [],
        viewType: 'grid',
        totalCount: 0,
        currentPage: 1,
        pageSize: 3,
    }),
    actions: {
        async fetchProducts() {
            await api(GET_CATEGORY_PRODUCT_LISTING, {
                categoryId: this.categoryId,
                currentPage: this.currentPage,
                pageSize: this.pageSize
            }).then(response => {
                this.products = response.data.products.items;
                this.totalCount = response.data.products.total_count;
                this.sorts = response.data.products.sort_fields.options;
                this.filters = response.data.products.filters;
            });
        },
        async fetchCategory(categoryId) {
            const router = useRouter();
            try {
                await api(GET_CATEGORY, {
                    categoryId
                }).then(async (response) => {
                    const { category } = response.data;
                    this.categoryId = category.id;
                    this.title = category.name;
                    this.path = category.path;

                    await this.fetchProducts();

                    const page = usePageStore();
                    page.setTitle(this.title);
                }).catch(error => {
                   // router.push({ name: 'NotFound' });
                });

            } catch (error) {
                console.log(error);
               // router.push({ name: 'NotFound' });
            }
        },

        isActive(filter) {
            return this.activeFilters.find(activeFilter => activeFilter.request_var === filter.request_var);
        },
        switchActiveFilter(filter) {
            let filterIndex = this.activeFilters.findIndex(activeFilter => activeFilter.request_var === filter.request_var);

            if (filterIndex !== -1) {
                this.activeFilters.splice(filterIndex, 1)
            } else {
                this.activeFilters.push(filter);
            }
        },

    },
})
