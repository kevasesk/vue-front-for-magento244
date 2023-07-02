import gql from "graphql-tag";

export const GET_CATEGORY = gql`
    query GetCategory($categoryId: Int!) {
        category(id: $categoryId) {
            id
            name
            products {
                items {
                    id
                    sku
                    name
                }
            }
        }
    }
`;

export const GET_CATEGORY_PRODUCT_LISTING = gql`
    query GetCategoryProductListing($categoryId: String, $currentPage: Int, $pageSize: Int){
        products(
            filter: {
                category_id: {
                    eq: $categoryId
                }
            },
            currentPage: $currentPage
            pageSize: $pageSize
        ){
            filters{
                request_var
                name
                filter_items{
                    label
                    value_string
                }
            }
            sort_fields{
                default
                options{
                    value
                    label
                }
            }
            total_count
            items{
                name
                sku
                price{
                    regularPrice{
                        amount{
                            value
                        }
                    }
                }
                special_price
                image{
                    url
                }
                canonical_url
                review_count
                rating_summary
                categories{
                    id
                    name
                }
                color
            }
        }
    }
`;
