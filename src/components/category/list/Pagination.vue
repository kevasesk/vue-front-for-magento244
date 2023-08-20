<script setup>
import {useCategoryStore} from '@/store/category'
import {watch} from 'vue'
import {storeToRefs} from 'pinia'

const category = useCategoryStore()
const { pageSize, currentPage } = storeToRefs(category)
watch(pageSize, async () => category.fetchProducts())
watch(currentPage, async () => category.fetchProducts())
</script>
<template>
    <div class="pagination">
        <div class="pages" :class="{'hidden': category.pageSize == category.totalCount}">
            Pages:
            <ul class="pages__list">
                <li class="pages__item" v-if="category.currentPage != 1">
                    <a href="#" @click.prevent="category.currentPage = category.currentPage - 1"> &lt; </a>
                </li>
                <template v-for="page in Math.ceil(category.totalCount / category.pageSize)">
                    <li class="pages__item" :class="{'pages__item-active': category.currentPage == page}">
                        <a href="#" @click.prevent="category.currentPage = page">{{page}}</a>
                    </li>
                </template>
                <li class="pages__item" v-if="category.currentPage != Math.ceil(category.totalCount / category.pageSize)">
                    <a href="#" @click.prevent="category.currentPage = category.currentPage + 1"> &gt; </a>
                </li>
            </ul>
        </div>

        <div class="pages-show">
            <span>Show</span>
            <select class="pages-show__list" v-model="pageSize">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <span>per page</span>
        </div>
    </div>
</template>
