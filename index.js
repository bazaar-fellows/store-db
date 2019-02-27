import express from 'express';
import mongoose from 'mongoose';

const { ApolloServer } = require('apollo-server-express');
const resolvers = require('./resolvers');

const typeDefs = require('./schema');


const app = express();
const PORT = process.env.PORT || 3000;
const mongo = process.env.MONGODB_URI || 'mongodb://localhost:27017/shop';

mongoose.connect(mongo, { useNewUrlParser: true, useCreateIndex: true });

export const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  qty: Number,
  category: String,
});

export const Category = mongoose.model('Category', {
  name: String,
  products: Array,
});

export const OrderItem = mongoose.model('OrderItem', {
  qty: Number,
  productId: String,
  orderId: String,
});

export const OrderList = mongoose.model('OrderList', {
  timeStamp: String,
  shipping: String,
  shippingId: String,
  status: String,
  items: Array,

});


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Product, Category, OrderItem, OrderList,
  },
});
server.applyMiddleware({ app });
app.listen(PORT);
