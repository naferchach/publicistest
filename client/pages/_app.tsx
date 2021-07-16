// @ts-nocheck
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { useApollo } from '../config/configApollo'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from '../contexts/userContext';

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps.initialApolloState)

    return (
        <ApolloProvider client={apolloClient}>
            <UserProvider >
                <Component {...pageProps} />
            </UserProvider>
        </ApolloProvider>
    )
}

export default MyApp