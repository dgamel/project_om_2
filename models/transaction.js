const Bookshelf = require('../bookshelf');


const Transaction = Bookshelf.Model.extend({
  tableName: 'transaction',
  hasTimestamps: true
});

module.exports = Bookshelf.model('Transaction', Transaction);
