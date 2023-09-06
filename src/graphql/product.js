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
    mutation CreateReview($nickname: String!, $summary: String!, $text: String!, $sku: String!) {
        createProductReview(
            input: {
                nickname: $nickname,
                summary: $summary,
                text: $text,
                sku: $sku,
                ratings: [
                    { id: "MQ==", value_id: "NQ==" },
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
