// eslint-disable-next-line import/no-cycle
import {
  Product, Category, OrderItem, OrderList,
} from './index';


export default {

  Category: {
    product: async ({ _id }) => Product.find({ categoryId: _id }).toArray(),
  },

  Product: {
    category: async (productid) => {
      // eslint-disable-next-line no-underscore-dangle
      const _id = productid.category;
      console.log(_id);
      return Category.findOne({ _id });
    },
  },

  Mutation: {
    createCategory: async (_, name) => {
      const newRecord = new Category(name);
      return newRecord.save();
    },

    createProduct: async (_, { input }) => {
      const newRecord = new Product(input);
      return newRecord.save();
    },

    createOrderItem: (_, { input }) => {
      const newRecord = new OrderItem(input);
      return newRecord.save();
    },

    createOrderList: (_, { input }) => {
      const newRecord = new OrderList(input);
      return newRecord.save();
    },

    deleteProduct: (_, _id) => Product.findByIdAndDelete(_id),

    deleteCategory: (_, _id) => Category.findByIdAndDelete(_id),

    deleteOrderItem: (_, _id) => OrderItem.findByIdAndDelete(_id),

    deleteOrderList: (_, _id) => OrderList.findByIdAndDelete(_id),

    updateProduct: (_, { _id, input }) => Product.findOneAndUpdate({ _id }, input, { new: true }),

    updateCategory: (_, { _id, input }) => Category.findOneAndUpdate({ _id }, input, { new: true }),

    updateOrderItem: (_, { _id, input }) => OrderItem.findOneAndUpdate({ _id }, input, { new: true }),

    updateOrderList: (_, { _id, input }) => OrderList.findOneAndUpdate({ _id }, input, { new: true }),

  },

  Query: {
    getAllProducts: () => Product.find({}),
    getProduct: (i, _id) => Product.findOne(_id),
    getAllCategories: () => Category.find({}),
    getCategory: (i, _id) => Category.findOne(_id),
    getAllOrderItems: () => OrderItem.find({}),
    getOrderItem: (i, _id) => OrderItem.find(_id),
    getAllOrderLists: () => OrderList.find({}),
    getOrderList: (i, _id) => OrderList.find(_id),

    getProductsByCategory: (_, category) => {
      console.log('categoryid', category);
      const product = Product.find(category);
      return product;
    },

    // getOrderListItems: (_, listId) => {
    //   console.log(list)
    // }


  },
};
