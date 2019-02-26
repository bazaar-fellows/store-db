import { gql } from 'apollo-server-express';

const typeDefs = gql`


type Product {
  _id: String!
  name: String!
  description: String!
  price: Float!
  qty: Int!
  category: Category
  categoryId: Category
}

type Category {
  _id: String!
  name: String!
  product: [Product]
}

type OrderItem {
  _id: String!
  qty: Int!
  productId: String!
  orderId: String
}


type OrderList {
  _id: String!
  timeStamp: String 
  shipping: String
  shippingId: String
  status: String
  items: [OrderItem]
}


input ProductInput {
  description: String
  name: String
  qty: Int
  price: Float
  category: String
  categoryId: String
}

input CategoryInput {
  name: String
}

type Query {
  getAllProducts: [Product!]
  getProduct(_id: String): Product!
  getAllCategories: [Category!]
  getCategory(_id: String): Category!
  getProductsByCategory(category: String): [Product]
}

type Mutation {
  createProduct(input: ProductInput): Product!
  createCategory(name: String!): Category!
  deleteProduct(_id: String!): [Product!]
  deleteCategory(_id: String!): [Category!]
  updateProduct(_id: ID!, input: ProductInput): Product!
  updateCategory(_id: ID!, input: CategoryInput): Category!

}`;

module.exports = typeDefs;
