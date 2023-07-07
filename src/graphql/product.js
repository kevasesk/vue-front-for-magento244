import gql from "graphql-tag";

export const GET_PRODUCT = gql`
    query GetProduct($sku: String!) {
        products(
            filter: {
                sku: {
                    eq: $sku
                }
            }
        ) {
            items {
                id
                sku
                name
                image{
                    url
                }
                description {
                    html
                }
                stock_status
                price_range {
                    minimum_price {
                        regular_price {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`;
