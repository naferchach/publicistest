import gql from 'graphql-tag';

const GET_USERS =  gql`
    query ($hasNext: Boolean) {
        users(hasNext: $hasNext) {
            name
            address
            email
            phone
        }
    }
`;

export default GET_USERS;