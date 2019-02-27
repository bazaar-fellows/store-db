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
  productId: String!
  qty: Int!
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

input OrderItemInput {
  productId: String!
  qty: Int!
  orderId: String!
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
  getAllOrderItems: [OrderItem!]
  getOrderItem(_id: String): OrderItem!
  getAllOrderLists: [OrderList!]
  getOrderList(_id: String): OrderList!
  getItemsByOrder(orderId: String): [OrderItem!]
}

type Mutation {
  createProduct(input: ProductInput): Product!
  createCategory(name: String!): Category!
  createOrderItem(input: OrderItemInput): OrderItem!
  createOrderList(input: OrderListInput ): OrderList!
  deleteProduct(_id: String!): [Product!]
  deleteCategory(_id: String!): [Category!]
  deleteOrderItem(_id: String!): [OrderItem!]
  deleteOrderList(_id: String!): [OrderList!]
  updateProduct(_id: ID!, input: ProductInput): Product!
  updateCategory(_id: ID!, name: String!): Category!
  updateOrderItem(_id: ID!, input: OrderItemInput): OrderItem!
  updateOrderList(_id: ID!, input: OrderListInput): OrderList!
  


}`;

module.exports = typeDefs;
