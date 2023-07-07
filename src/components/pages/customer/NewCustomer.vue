<script setup>
import { ref } from 'vue'
import ApolloClient from 'apollo-boost'
import { CREATE_CUSTOMER } from '@/graphql/customer'
import { usePageStore } from '@/store/page'

const page = usePageStore();
page.setTitle('Customer Registration');

const form = ref({
    firstname: '',
    lastname: '',
    subscribe: false,
    email: '',
    password: '',
    confirm_password: '',
});

const errors = ref([])
const messages = ref([])

async function postForm(){
    if (!form.value.firstname
        || !form.value.lastname
        || !form.value.email
        || !form.value.password
    ) {
        errors.value.push('Required!');
    } else {
        const apolloClient = new ApolloClient({ uri: '/api/graphql' });
        await apolloClient.mutate({
            mutation: CREATE_CUSTOMER,
            variables: {
                firstname: form.value.firstname,
                lastname: form.value.lastname,
                email: form.value.email,
                password: form.value.password,
                isSubscribed: form.value.subscribe
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

            <h3>Personal Information</h3>
            <div class="form-elements">
                <label>First name <span class="required">*</span></label>
                <input type="text" name="firstname" placeholder="Some firstname" v-model="form.firstname"/>

                <label>Last name <span class="required">*</span></label>
                <input type="text" name="lastname" placeholder="Some lastname" v-model="form.lastname"/>
            </div>
            <div class="sign-up">
                <input type="checkbox" name="subscribe" v-model="form.subscribe"/> <span>Sign Up for Newsletter</span>
            </div>
            <h3>Email & Password</h3>
            <div class="form-elements">
                <label>Email <span class="required">*</span></label>
                <input type="email" name="email" placeholder="Some email" v-model="form.email"/>

                <label>Password <span class="required">*</span></label>
                <input type="password" name="password" placeholder="Some password" v-model="form.password"/>

                <label>Confirm Password <span class="required">*</span></label>
                <input type="password" name="confirm_password" placeholder="Some password" v-model="form.confirm_password"/>

            </div>
            <div class="form-actions">
                <div><button class="green-button" type="submit">Create an Account</button></div>
                <div class="back">
                    <router-link to="this.$router.options.history.state.back">Go Back</router-link>
                </div>
            </div>

        </form>
    </div>
</template>
