import { gql } from 'apollo-server-express';

const typeDefs = gql`

type Category {
  _id: String!
  name: String!
  product: [Product]
}

type Product {
  _id: String!
  description: String!
  name: String!
  qty: Int!
  price: Float!
  categoryId: Category
  category: Category
}



input ProductInput {
  description: String
  name: String
  qty: Int
  price: Float
  category: String
  categoryId: String
}

type Query {
  getAllProducts: [Product!]
  getProduct(_id: String): Product!
  getAllCategories: [Category!]
  getCategory(_id: String): Category!
}

type Mutation {
  createProduct(input: ProductInput): Product!
  createCategory(name: String!): Category!
  deleteProduct(_id: String!): [Product!]
  deleteCategory(_id: String!): [Category!]
  updateProduct(_id: ID!, input: ProductInput): Product!
  updateCategory(_id: ID!, name: String!): Category!

}`;

module.exports = typeDefs;
