import { initializeApollo } from '../../config/configApollo';
import GET_USERS from '../../queries';
import { SET_USERS_LIST, MAX_USERS_LISTE_SIZE, START_LOADING } from '../../utils/constants';

export const fetchUsers = async (payload) => {
    const { users, dispatch } = payload;
    try {
        dispatch({type: START_LOADING, loading:true});
        
        const apolloClient = initializeApollo();

        if (!apolloClient) {
            console.error(
                '!**** No apolloClient provided with fetchUsers in actions/user/actions.js ****!'
            );
            return;
        }
        const hasNext = users?.length < MAX_USERS_LISTE_SIZE;

        const { data } = await apolloClient.query({
            query: GET_USERS,
            variables: { hasNext },
            fetchPolicy: 'network-only',
        });

        const usersData = data?.users;
        dispatch({ type: SET_USERS_LIST, users: usersData });
    } catch (err) {
        console.error(err);
    }finally{
        dispatch({type: START_LOADING, loading:false});
    }
};
