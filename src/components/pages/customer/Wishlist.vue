<script setup>
import Sidebar from '@/components/pages/customer/Sidebar.vue'
import { usePageStore } from '@/store/page'
import { useCustomerStore } from '@/store/customer'
import { onMounted } from "vue";

const page = usePageStore();
page.setTitle('Customer Wishlist');

const customer = useCustomerStore();
onMounted(() => {
    customer.initCustomer()
})
</script>
<template>
    <div class="container">
        <div class="customer-dashboard-container">
            <Sidebar/>
            <div class="main-info-container" v-if="customer.customer">
                <div class="wishlist-container">
                    <h3>My Wish List</h3>
                    <div class="wishlist-products">
                        <div class="no-products small-text">You have no items in your wish list.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
