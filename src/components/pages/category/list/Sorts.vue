<script setup>
import GridView from '@/assets/images/grid_view.svg';
import ListView from '@/assets/images/list_view.png';
import ArrowUp from '@/assets/images/arrow_up.svg';
import ArrowDown from '@/assets/images/arrow_down.svg';
</script>
<template>
    <div class="sorts">
        <div class="sorts-container-left">
            <img class="view active" :src="GridView"/>
            <img class="view" :src="ListView"/>
            <div class="items-count small-text">Items 1-9 of 32</div>
        </div>
        <div class="sorts-container-right">
            <div class="sort-text small-text">Sort By</div>
            <select name="sort">
                <option value="some">Some</option>
                <option value="some1">Some1</option>
                <option value="some2">Some2</option>
            </select>
            <img class="select-icon" :src="ArrowDown"/>
            <img class="sort-direction" :src="ArrowUp"/>
        </div>
    </div>
</template>
