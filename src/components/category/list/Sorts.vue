<script setup>
import GridView from '@/assets/images/grid_view.svg';
import ListView from '@/assets/images/list_view.png';
import ArrowUp from '@/assets/images/arrow_up.svg';

import { useCategoryStore } from '@/store/category'
const category = useCategoryStore()
</script>
<template>
    <div class="sorts">
        <div class="sorts-container-left">
            <img class="view" :class="{ active: category.viewType === 'grid'}" :src="GridView" @click="category.viewType = 'grid'"/>
            <img class="view" :class="{ active: category.viewType === 'list'}" :src="ListView" @click="category.viewType = 'list'"/>
            <div class="items-count small-text">Items 1-9 of {{category?.totalCount}}</div>
        </div>
        <div class="sorts-container-right">
            <div class="sort-text small-text">Sort By</div>
            <select name="sort" class="list-select">
                <option :value="sort.value" v-for="sort in category.sorts">{{sort.label}}</option>
            </select>
            <img class="sort-direction" :src="ArrowUp"/>
        </div>
    </div>
</template>
