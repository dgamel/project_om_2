const Bookshelf = require('../bookshelf');

const Product = Bookshelf.Model.extend({
  tableName: 'shoppingcart',
  hasTimestamps: true
});

module.exports = Bookshelf.model('shoppingcart', shoppingcart);
