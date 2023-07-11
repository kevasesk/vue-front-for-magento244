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
