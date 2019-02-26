
// eslint-disable-next-line import/no-cycle
import Product from './index';


export default {

  Mutation: {
    async createProduct(_, { input }) {
      const newRecord = new Product(input);
      console.log(newRecord);
      return newRecord.save();
    },
    deleteProduct: (_, _id) => Product.findByIdAndDelete(_id),
    updateProduct: (_, { _id, input }) => Product.findOneAndUpdate({ _id }, input, { new: true }),

  },

  Query: {
    getAllProducts: () => Product.find({}),
    getProduct: (i, _id) => Product.findOne(_id),
  },
};
