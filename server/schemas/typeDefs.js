const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String!
    email: String!
    password: String!
  }

  type Account {
    name: String
    acctNum: Int
    balance: Int
  }

  input AccountInput {
    name: String
    acctNum: Int
    balance: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    accounts: [Account]!
    user(username: String!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  type Mutation {
    addAccount(input: AccountInput): Auth
    addUser(
      firstName: String
      lastName: String
      username: String!
      email: String!
      password: String!
    ): Auth

    login(email: String!, password: String!): Auth

    removeUser: User

    updateUser(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
    ): User
  }
`;

module.exports = typeDefs;
