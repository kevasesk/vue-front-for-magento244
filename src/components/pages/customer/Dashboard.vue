<script setup>
import Sidebar from '@/components/pages/customer/Sidebar.vue'
import { useRouter } from 'vue-router';
import { usePageStore } from '@/store/page'
import { useCustomerStore } from '@/store/customer'
import {onMounted} from "vue";


const page = usePageStore();
page.setTitle('Customer Account');

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
                <div class="area-container">
                    <h3>Account Information</h3>
                    <div class="information-container">
                        <div class="area-information">
                            <h5>Contact Information</h5>
                            <div class="info">
                                {{customer.customer.email}}<br/>
                                {{customer.customer.firstname}}<br/>
                                {{customer.customer.lastname}}<br/>
                            </div>
                            <div class="actions">
                                <a href="#">Edit</a>
                                <a href="#">Change Password</a>
                            </div>
                        </div>
                        <div class="area-information">
                            <h5>Newsletters</h5>
                            <div class="info" v-if="!customer.customer.is_subscribed">
                                You don't subscribe to our newsletter.
                            </div>
                            <div class="info" v-if="customer.customer.is_subscribed">
                                You subscribed to our newsletter!
                            </div>
                            <div class="actions">
                                <router-link to="/subs">Edit</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="area-container">
                    <div class="line">
                        <h3>Address Book</h3>
                        <a href="#">Edit</a>
                    </div>

                    <div class="information-container">
                        <div class="area-information" v-if="customer.getDefaultBillingAddress()">
                            <h5>Default Billing Address</h5>
                            <div class="info">
                                {{customer.getDefaultBillingAddress().city}}<br/>
                                {{customer.getDefaultBillingAddress().telephone}}<br/>
                            </div>
                            <div class="actions">
                                <a href="#">Edit Address</a>
                            </div>
                        </div>
                        <div class="area-information" v-if="customer.getDefaultShippingAddress()">
                            <h5>Default Shipping Address</h5>
                            <div class="info">
                                {{customer.getDefaultShippingAddress().city}}<br/>
                                {{customer.getDefaultShippingAddress().telephone}}<br/>
                            </div>
                            <div class="actions">
                                <a href="#">Edit Address</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
