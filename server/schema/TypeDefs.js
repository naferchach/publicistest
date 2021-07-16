const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        name: String!
        address: String!
        email: String!
        phone: String!
    }

    type Query {
        users(hasNext: Boolean): [User!]!
    }
`;

module.exports = { typeDefs };
