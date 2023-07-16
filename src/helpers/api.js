import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

export function api(gql, variables = {}, type = 'query' , headers = {}) {
    const apolloClient = new ApolloClient({
        link: new HttpLink({ uri: '/api/graphql' }),
        cache: new InMemoryCache()
    });

    if (type === 'query') {
        return apolloClient.query({
            query: gql,
            variables,
            headers
        });
    }

    return apolloClient.mutate({
        mutation: gql,
        variables,
        headers
    });
}
