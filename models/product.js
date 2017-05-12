const Bookshelf = require('../bookshelf');

const Product = Bookshelf.Model.extend({
  tableName: 'product',
  hasTimestamps: true
});

module.exports = Bookshelf.model('Product', Product);
