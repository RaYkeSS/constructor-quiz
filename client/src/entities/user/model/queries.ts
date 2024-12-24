import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query {
        users {
            id
            name
            email
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id: String!){
        user(id: $id) {
            id
            name
            email
        }
    }
`;