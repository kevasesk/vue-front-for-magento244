<script setup>
import { ref } from 'vue'
import { usePageStore } from '@/store/page'
import { useCustomerStore } from '@/store/customer'
import { useRouter } from 'vue-router';

const page = usePageStore();
page.setTitle('Customer Login');

const form = ref({
    email: '',
    password: '',
});

const errors = ref([])
const messages = ref([])
const router = useRouter()

async function postForm(){
    if (!form.value.email
        || !form.value.password
    ) {
        errors.value.push('Required!');
    } else {
        const customer = useCustomerStore();
        await customer.login(form.value.email, form.value.password);
    }
}
</script>
<template>
    <div class="customer-registration-container">
        <form action="#" @submit.prevent="postForm">

            <div v-if="messages?.length" class="messages">
                <ul>
                    <li v-for="message in messages">{{ message }}</li>
                </ul>
            </div>

            <div v-if="errors?.length" class="errors">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>

            <h3>Login</h3>
            <div class="form-elements">
                <label>Email <span class="required">*</span></label>
                <input type="email" name="email" placeholder="Some email" v-model="form.email"/>

                <label>Password <span class="required">*</span></label>
                <input type="password" name="password" placeholder="Some password" v-model="form.password"/>
            </div>
            <div class="form-actions">
                <div><button class="green-button" type="submit">Login</button></div>
                <div class="back">
                    <router-link to="this.$router.options.history.state.back">Go Back</router-link>
                </div>
            </div>

        </form>
    </div>
</template>
