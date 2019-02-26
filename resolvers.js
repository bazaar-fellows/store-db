
import { ObjectId } from 'mongodb';
// eslint-disable-next-line import/no-cycle
import { Product, Category } from './index';


// const prepare = (o) => {
//   o._id = o._id.toString();
//   return o;
// };

export default {

  Category: {
    product: async ({ _id }) => {
      console.log(_id);
      return Product.find({ categoryId: _id }).toArray();
    },
  },

  Product: {
    category: async (productid) => {
      // eslint-disable-next-line no-underscore-dangle
      const _id = productid.category;
      return Category.findOne({ _id });
    },
  },

  Mutation: {
    createCategory: async (_, name) => {
      const newRecord = new Category(name);
      return newRecord.save();
    },

    createProduct: async (_, { input }) => {
      // console.log(input);
      const newRecord = new Product(input);
      return newRecord.save();
    },

    deleteProduct: (_, _id) => Product.findByIdAndDelete(_id),
    deleteCategory: (_, _id) => Category.findByIdAndDelete(_id),

    updateProduct: (_, { _id, input }) => Product.findOneAndUpdate({ _id }, input, { new: true }),
    updateCategory: (_, { _id, input }) => Category.findOneAndUpdate({ _id }, input, { new: true }),
  },

  Query: {
    getAllProducts: () => Product.find({}),
    getProduct: (i, _id) => Product.findOne(_id),
    getAllCategories: () => Category.find({}),
    getCategory: (i, _id) => Category.findOne(_id),
  },
};
