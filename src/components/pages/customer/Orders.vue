<script setup>
import Sidebar from '@/components/pages/customer/Sidebar.vue'
import { usePageStore } from '@/store/page'
import { useCustomerStore } from '@/store/customer'
import { onMounted } from "vue";

const page = usePageStore();
page.setTitle('Customer Orders');

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
                    <h3>Orders</h3>
                    123 345
                </div>
            </div>
        </div>
    </div>
</template>
