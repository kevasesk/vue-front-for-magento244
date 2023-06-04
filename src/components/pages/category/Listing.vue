<script lang="ts">
import axios from "axios";

export default {
    data(){
        return {
            data: null
        }
    },
    methods:{
        makeRequest(){
            const tokenAdmin = 'x07fy2jcjasd3mxejkppx8sccckvu1k5';
            const tokenCustomer = 'nrry6spdbfko5nevt0rcx2e9mav523f1';

            let query = `
              query {
                customer {
                  id
                  is_subscribed
                  firstname
                  email
                }
              }
            `;

            // axios.post(`/api/rest/V1/integration/customer/token`, {
            //     "username": 'ysemenov1@eva.ua',
            //     "password": 'ysemenov1@eva.ua1',
            // }).then(response => {
            //     console.log(response);
            //     this.data = response.data;
            // });

             // axios.get(`/api/rest/V1/products/simple5`, {
             // axios.post(`/api/rest/V1/integration/customer/token`, {
             // axios.get(`/api/rest/V1/customers/1`, {
              axios.post(`/api/graphql`, { query }, {
                  headers: {
                      "Authorization": "Bearer nrry6spdbfko5nevt0rcx2e9mav523f1"
                  }
              })
                .then(response => {
                    console.log(response);
                    this.data = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
}

</script>
<template>
    <div class="product-listing">


        <button @click="makeRequest">make request</button><br/>
        <pre>{{data}}</pre>

    </div>
</template>
