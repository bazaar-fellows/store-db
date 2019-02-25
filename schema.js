import { gql } from 'apollo-server-express';

const typeDefs = gql`

type Product {
  _id: String!
  name: String!
}

type Query {
  allProducts: [Product!]
}

type Mutation {
  createProduct(name: String!): Product!
}`;

module.exports = typeDefs;
