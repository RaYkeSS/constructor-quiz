import { gql } from 'apollo-server';

export const userSchema = gql`
    type Query {
        users: [User]
        user(email: String!): User
        login(email: String!, password: String!): User
    }

    type Mutation {
        addUser(name: String!, email: String!, password: String!): User!
        changeUserPassword(email: String!): User!
    }
    
    type User {
        id: String!
        name: String!
        email: String!
        password: String!
    }

`;