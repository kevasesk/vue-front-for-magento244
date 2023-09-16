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
                type_id
                ... on ConfigurableProduct {
                    configurable_options {
                        attribute_uid
                        attribute_code
                        label
                        values {
                            value_index
                            label
                        }
                    }
                    variants {
                        product {
                            sku
                            color
                            size
                        }
                    }
                }
                image{
                    url
                }
                media_gallery{
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
                rating_summary
                review_count
                reviews(pageSize: 10) {
                    items {
                        summary
                        text
                        nickname
                        created_at
                        average_rating
                    }
                    page_info {
                        current_page
                        page_size
                    }
                }
            }
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview($nickname: String!, $summary: String!, $text: String!, $sku: String!, $ratingValue: String!) {
        createProductReview(
            input: {
                nickname: $nickname,
                summary: $summary,
                text: $text,
                sku: $sku,
                ratings: [
                    { id: "MQ==", value_id: $ratingValue },
                ]
            }
        ) {
            review {
                nickname
                summary
                text
                created_at
            }
        }
    }
`;
