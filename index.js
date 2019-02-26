import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import resolvers from './resolvers';

const typeDefs = require('./schema');


const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost:27017/shop', { useNewUrlParser: true, useCreateIndex: true });

export const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number,
  qty: Number,
  category: String,
});

export const Category = mongoose.model('Category', {
  name: String,
});


const server = new ApolloServer({ typeDefs, resolvers, context: { Product, Category } });
server.applyMiddleware({ app });
app.listen(PORT);
