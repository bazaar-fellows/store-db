import { gql } from 'apollo-server-express';

const typeDefs = gql`

type Product {
  _id: String!
  description: String!
  name: String!
  qty: Int!
  price: Float!

}

type Query {
  getAllProducts: [Product!]
  getProduct(_id: String): Product!
}

input ProductInput {
  description: String
  name: String
  qty: Int
  price: Float
}

type Mutation {
  createProduct(input: ProductInput): Product!
  deleteProduct(_id: String!): [Product!]
  updateProduct(_id: ID!, input: ProductInput): Product!
}`;

module.exports = typeDefs;
