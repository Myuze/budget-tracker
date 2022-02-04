import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ACCT_BY_NAME = gql`
  query acct($name: String!) {
    acct(name: $name) {
      _id
      name
      acctNum
      balance
      lastTransaction
    }
  }
}`;

export const QUERY_ACCT_BY_NUM = gql`
  query acct($acctNum: String!) {
    acct(acctNum: $acctNum) {
      _id
      name
      acctNum
      balance
      lastTransaction
    }
  }
}`;
