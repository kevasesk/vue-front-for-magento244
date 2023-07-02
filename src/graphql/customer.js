import gql from "graphql-tag";

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer($firstname: String!, $lastname: String!, $email: String!, $password: String!, $isSubscribed: Boolean!) {
        createCustomer(input:{
            firstname: $firstname,
            lastname: $lastname,
            email: $email,
            password: $password,
            is_subscribed: $isSubscribed
        }){
            customer{
                id
            }
        }
    }
`;

export const GENERATE_CUSTOMER_TOKEN = gql`
    mutation GenerateCustomerToken($email: String!, $password: String!) {
        generateCustomerToken(email: $email, password: $password){
            token
        }
    }
`;
