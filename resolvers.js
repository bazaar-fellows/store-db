import Product from './index';


export default {

  Mutation: {
    createProduct: (_, args) => {
      const post = {
        name: args.name,
      };
      const newRecord = new Product(post);
      return newRecord.save();
    },
  },
};
