<script setup>
import {useProductStore} from "@/store/product";
import {useCartStore} from "@/store/cart";

const product = useProductStore()
const cart = useCartStore()
</script>
<template>
    <div class="product-container__config-options" v-if="product.currentProduct.type_id == 'configurable'">
        <div class="product-container__attribute" v-for="attribute in product.currentProduct.configurable_options">
            <div class="attribute__label">{{attribute.label}}:</div>
            <select class="attribute__options" v-model="cart.selectedOptionValueIndex[attribute.attribute_code]">
                <option
                    v-for="value in attribute.values"
                    :value="value.value_index"
                    class="value__label"
                >{{value.label}}</option>
            </select>
        </div>
    </div>
</template>
