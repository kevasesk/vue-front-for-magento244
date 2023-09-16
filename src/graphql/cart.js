import gql from "graphql-tag";

export const CREATE_CART = gql`
    mutation CREATE_CART {
        createEmptyCart
    }
`;

export const GET_CART_ITEMS = gql`
    query GET_CART_ITEMS($cartId: String!){
        cart(cart_id: $cartId) {
            available_payment_methods{
                code
                title
            }
            shipping_addresses{
                available_shipping_methods {
                    carrier_code
                    method_code
                    carrier_title
                    method_title
                    amount {
                        currency
                        value
                    }
                }
            }
            total_quantity
            prices{
                grand_total{
                    value
                    currency
                }
                subtotal_including_tax{
                    value
                    currency
                }
                subtotal_excluding_tax{
                    value
                    currency
                }
                discount{
                    amount{
                        value
                        currency
                    }
                }
            }
            items {
                id
                quantity
                product {
                    name
                    sku
                    price {
                        regularPrice {
                            amount {
                                value
                                currency
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const ADD_SIMPLE_TO_CART = gql`
    mutation ADD_SIMPLE_TO_CART($cartId: String!, $qty: Float!, $sku: String!) {
        addSimpleProductsToCart(
            input: {
                cart_id: $cartId,
                cart_items: [
                    {
                        data: {
                            quantity: $qty,
                            sku: $sku
                        }
                    }
                ]
            }
        ) {
            cart {
                items {
                    id
                    quantity
                    product {
                        name
                    }
                }
            }
        }
    }
`;
export const ADD_CONFIGURABLE_TO_CART = gql`
    mutation ADD_CONFIGURABLE_TO_CART($cartId: String!, $qty: Float!, $sku: String!, $parentSku: String!, $selectedOptions: [ID!]) {
        addConfigurableProductsToCart(
            input: {
                cart_id: $cartId
                cart_items: [
                    {
                        data: {
                            quantity: $qty
                            sku: $sku
                            parent_sku: $parentSku
                            selected_options: $selectedOptions
                        }
                    }
                ]
            }
        ) {
            cart {
                items {
                    id
                    product {
                        name
                    }
                    quantity
                }
            }
        }
    }

`;

export const SET_SHIPPING_ADDRESS = gql`
    mutation SET_SHIPPING_ADDRESS(
        $cartId: String!,
        $firstname: String!,
        $lastname: String!,
        $street: [String]!,
        $city: String!,
        $region: String!,
        $postcode: String!,
        $countryCode: String!,
        $telephone: String!
    ) {
        setShippingAddressesOnCart(
            input: {
                cart_id: $cartId
                shipping_addresses: [
                    {
                        address: {
                            firstname: $firstname
                            lastname: $lastname
                            street: $street
                            city: $city
                            region: $region
                            postcode: $postcode
                            country_code: $countryCode
                            telephone: $telephone
                        }
                    }
                ]
            }
        ) {
            cart {
                id
            }
        }
    }
`;
export const SET_BILLING_ADDRESS = gql`
    mutation SET_BILLING_ADDRESS(
        $cartId: String!,
        $firstname: String!,
        $lastname: String!,
        $street: [String]!,
        $city: String!,
        $region: String!,
        $postcode: String!,
        $countryCode: String!,
        $telephone: String!
    ) {
        setBillingAddressOnCart(
            input: {
                cart_id: $cartId
                billing_address: {
                    same_as_shipping: true,
                    address: {
                        firstname: $firstname
                        lastname: $lastname
                        street: $street
                        city: $city
                        region: $region
                        postcode: $postcode
                        country_code: $countryCode
                        telephone: $telephone
                    }
                }
            }
        ) {
            cart {
                id
            }
        }
    }
`;

export const SET_GUEST_EMAIL = gql`
    mutation SET_GUEST_EMAIL(
        $cartId: String!,
        $email: String!
    ) {
        setGuestEmailOnCart(
            input: {
                cart_id: $cartId,
                email: $email
            }
        ){
            cart{
                id
            }
        }
    }
`;
export const SET_SHIPPING = gql`
    mutation SET_SHIPPING(
        $cartId: String!,
        $carrierCode: String!,
        $methodCode: String!
    ) {
        setShippingMethodsOnCart(
            input: {
                cart_id: $cartId
                shipping_methods: [
                    {
                        carrier_code: $carrierCode
                        method_code: $methodCode
                    }
                ]
            }
        ){
            cart{
                id
            }
        }
    }
`;


export const SET_PAYMENT = gql`
    mutation SET_PAYMENT(
        $cartId: String!,
        $code: String!
    ) {
        setPaymentMethodOnCart(
            input: {
                cart_id: $cartId
                payment_method: {
                    code: $code
                }
            }
        ){
            cart{
                id
            }
        }
    }
`;

export const PLACE_ORDER = gql`
    mutation PLACE_ORDER(
        $cartId: String!
    ) {
        placeOrder(
            input: {
                cart_id: $cartId
            }
        ) {
            order {
                order_number
            }
        }
    }
`;

export const REMOVE_ITEM_FROM_CART = gql`
    mutation REMOVE_ITEM_FROM_CART($cartId: String!, $cartItemId: String!) {
        removeItemFromCart(
            input: {
                cart_id: $cartId,
                cart_item_uid: $cartItemId
            }
        ) {
            cart {
                items {
                    id
                    quantity
                    product {
                        name
                    }
                }
            }
        }
    }
`;

export const COUNTRIES = gql`
    query COUNTRIES {
        countries {
            id
            full_name_english
            available_regions {
                id
                code
                name
            }
        }
    }
`;
