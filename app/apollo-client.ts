import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
    //TODO: envから取得する
    uri: "http://backend:8080/query",
    credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
    //TODO: ストレージから取得する
    const token = null;

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`: '',
        },
    };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export {
    apolloClient,
};
