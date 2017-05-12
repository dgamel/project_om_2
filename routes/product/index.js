const Product = require('../../models/product');
const Transaction = require('../../models/transaction');
const router = require('express').Router();

// INDEX
router.get('/', function(req, res, next) {
  Product.fetchAll().then( (products) => {
    res.status(200).json(products);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', function(req, res, next) {
  Product.where({id: req.params.id}).fetch ().then( (products) => {
    if (!products) {

      res.status(404).json({ message: 'Product not found'});
    }
    else {
      res.status(200).json(products);
    }
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


// CREATE
router.post('/', (req, res, next) => {
  Product.forge(req.body).save().then( (products) => {
    res.json(products);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE
router.put('/:id', (req, res, next) => {
  Product.forge({'id': req.params.id}).save(req.body).then( (products) => {
    res.json(products);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DESTROY
router.delete('/:id', (req, res, next) => {
  Product.where({id: req.params.id}).fetch().then( (products) => {
    if (!products) {
      res.status(404).json({ message: 'Products not found'});
    }
    else {
      products
      .destroy()
      .then( (products) => {
        res.json(products);
      }).catch( (err) => {
        console.log(err);
        res.status(500).json();
      });
    }
  });
});


module.exports = router;
