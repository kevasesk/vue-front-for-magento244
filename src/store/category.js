import { defineStore } from 'pinia'
import { usePageStore } from '@/store/page'
import { useRouter } from 'vue-router';
import { api } from '@/helpers/api'

import { GET_CATEGORY, GET_CATEGORY_PRODUCT_LISTING, GET_ATTRIBUTES_META_DATA } from '@/graphql/category'

export const useCategoryStore = defineStore('category', {
    state: () => {
        const router = useRouter();

        return {
            categoryId: null,
            title: '',
            url: '',
            path: '',
            image: '',
            products: null,
            attributes: [],
            sorts: null,
            sortDirection: 'desc',
            filters: null,
            activeFilters: {},
            openedFilters: [],
            viewType: 'grid',
            totalCount: 0,
            currentPage: 1,
            pageSize: 3,
        }
    },
    actions: {
        async fetchAttributes() {
            await api(GET_ATTRIBUTES_META_DATA).then(response => {
                this.attributes = response.data.customAttributeMetadata.items;
            });
        },
        async fetchProducts() {
            try {
                console.log('fetch products!');//ysemenov
                console.log(this.activeFilters);//ysemenov

                const filters = this.collectFilter();
                //TODO fix filters when zero products filtered.

                console.log(filters);//ysemenov
                await api(GET_CATEGORY_PRODUCT_LISTING, {
                    categoryId: this.categoryId,
                    currentPage: this.currentPage,
                    pageSize: this.pageSize,
                    ...filters
                }).then(response => {
                    this.products = response.data.products.items;
                    this.totalCount = response.data.products.total_count;
                    this.sorts = response.data.products.sort_fields.options;
                    this.filters = response.data.products.filters;
                }).catch(error => {
                    console.log(error);
                });
            } catch (error) {
                console.error("An error occurred:", error);
            }
        },
        async fetchCategory(categoryId) {
            try {
                await api(GET_CATEGORY, {
                    categoryId
                }).then(async (response) => {
                    const { category } = response.data;
                    this.categoryId = category.id;
                    this.title = category.name;
                    this.path = category.path;
                    const page = usePageStore();
                    page.setTitle(this.title);
                    await this.fetchProducts();
                }).catch(error => {
                   //this.router.push({ name: 'NotFound' });
                });

            } catch (error) {
                console.log(error);
               // this.router.push({ name: 'NotFound' });
            }
        },

        collectFilter(){
            const filters = {};

            if (this.activeFilters['Color']) {
                filters.colorOptions = this.activeFilters['Color'];
            }
            if (this.activeFilters['Price'] && this.activeFilters['Price'][0]) {
                filters.minPrice = this.activeFilters['Price'][0];
            }
            if (this.activeFilters['Price'] && this.activeFilters['Price'][1]) {
                filters.maxPrice = this.activeFilters['Price'][1];
            }

            return filters;
        },
        getAttributeValue(attributeCode, attributeValue){
            let attribute = this.attributes.find(attribute => attribute.attribute_code === attributeCode);
            return attribute.attribute_options.find(option => option.value == attributeValue)?.label;
        },
        isActive(filter) {
            return this.openedFilters.find(activeFilter => activeFilter.request_var === filter.request_var);
        },
        switchActiveFilter(filter) {
            let filterIndex = this.openedFilters.findIndex(activeFilter => activeFilter.request_var === filter.request_var);

            if (filterIndex !== -1) {
                this.openedFilters.splice(filterIndex, 1)
            } else {
                this.openedFilters.push(filter);
            }
        },
        itemsFrom(){
            return (this.currentPage - 1) * this.pageSize + 1;
        },
        itemsTo(){
            return this.currentPage * this.pageSize;
        },
        switchSortDirection(){
            this.sortDirection = this.sortDirection === 'asc' ? this.sortDirection = 'desc': this.sortDirection = 'asc';
        },
        switchFilter(attribute, value) {
            if (!this.activeFilters[attribute]){
                this.activeFilters[attribute] = [];
            }

            if (!this.activeFilters[attribute].includes(value)){

                this.activeFilters[attribute].push(value);
            } else {
                this.activeFilters[attribute] = this.activeFilters[attribute].filter(item => item !== value)
            }
        },
        isChecked(attribute, value) {
            if(!this.activeFilters[attribute]){
                return false;
            }

            return this.activeFilters[attribute].includes(value);
        }
    },
})
