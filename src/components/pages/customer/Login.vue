<script setup>
import { ref } from 'vue'
import ApolloClient from 'apollo-boost'
import { GENERATE_CUSTOMER_TOKEN } from '@/graphql/customer'
import { usePageStore } from '@/store/page'

const page = usePageStore();
page.setTitle('Customer Login');

const form = ref({
    email: '',
    password: '',
});

const errors = ref([])
const messages = ref([])

async function postForm(){
    if (!form.value.email
        || !form.value.password
    ) {
        errors.value.push('Required!');
    } else {
        const apolloClient = new ApolloClient({ uri: '/api/graphql' });
        await apolloClient.mutate({
            mutation: GENERATE_CUSTOMER_TOKEN,
            variables: {
                email: form.value.email,
                password: form.value.password,
            }
        }).then(async (response) => {
            messages.value.push('Success!');
            console.log(response);//ysemenov
        }).catch(error => {
            errors.value.push(error);
            console.log(error);//ysemenov
        });
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
                    <router-link :to="this.$router.options.history.state.back">Go Back</router-link>
                </div>
            </div>

        </form>
    </div>
</template>
