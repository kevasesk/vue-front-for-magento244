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
    query GetCategoryProductListing(
        $categoryId: String,
        $colorOptions: [String],
        $minPrice: String,
        $maxPrice: String,
        $currentPage: Int,
        $pageSize: Int
    ){
        products(
            filter: {
                category_id: {
                    eq: $categoryId
                },
                color: {
                    in: $colorOptions
                },
                price: {
                    from: $minPrice,
                    to: $maxPrice
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
                id
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

export const GET_ATTRIBUTES_META_DATA = gql`
    query GetAttributesMetaData {
        customAttributeMetadata(attributes: [
            {
                attribute_code: "color",
                entity_type: "catalog_product"
            },
            {
                attribute_code: "manufacturer",
                entity_type: "catalog_product"
            },
        ]) {
            items{
                attribute_code
                attribute_options{
                    label
                    value
                }
            }
        }
    }
`;
