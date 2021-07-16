import { initializeApollo } from '../config/configApollo';
import UsersContainer from '../components/UsersContainer';
import GET_USERS from '../queries';


const Users = () => (
    <UsersContainer />
)

export const getStaticProps  = async () => {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: GET_USERS,
        variables: {hasNext: true}
    });

    return { 
        props: {
            initialApolloState: apolloClient.cache.extract()
        }
    }
}

export default Users