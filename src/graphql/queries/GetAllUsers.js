import { gql } from 'apollo-boost';

export default gql`query GetAllUsers {
  users {
    name
    id
  }
  }`;