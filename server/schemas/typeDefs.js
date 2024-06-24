const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Character {
    _id: ID
    name: String!
    damage_type: String!
    path: String!
    rarity: String!
    affiliations:[String]
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    characters: [Character]
    character(characterId: ID!): Character
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    logout: Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
