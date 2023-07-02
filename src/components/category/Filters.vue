<script setup>
import ArrowDown from '@/assets/images/arrow_down.svg';

import { useCategoryStore } from '@/store/category'
const category = useCategoryStore()
</script>
<template>
    <div class="filters">
        <h3>Shopping Options</h3>
        <div class="filters-container">
            <template v-for="filter in category.filters">
                <div class="filter"
                     :class="{ active: category.isActive(filter)}"
                     @click="category.switchActiveFilter(filter)"
                >
                    <div class="filter-title">{{filter.name}}</div>
                    <img class="arrow" :src="ArrowDown"/>
                </div>
                <div class="filter-values" v-show="category.isActive(filter)">
                    <ul>
                        <li v-for="item in filter.filter_items">
                            <input type="checkbox" :value="item.value_string"/>
                            <span v-html="item.label"></span>
                        </li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>
