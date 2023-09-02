const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  input InputBook {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }
    
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: InputBook!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;