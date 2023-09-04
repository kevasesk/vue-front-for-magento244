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
    mutation CreateReview($nickname: String, $ratingValue: Int!, $title: String!, $detail: String!, $productId: String!) {
        createProductReview(
            input: {
                nickname: $nickname
                ratings: [
                    {
                        rating_name: "Rating"
                        value: $ratingValue
                    }
                ]
                title: $title
                detail: $detail
                entity_pk_value: $productId # Use the product's ID or SKU here
            }
        ) {
            review {
                review_id
            }
        }
    }
`;
