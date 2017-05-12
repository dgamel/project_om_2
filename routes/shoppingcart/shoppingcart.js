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
  Product.where({id: req.params.id}).fetch ().then( (product) => {
    if (!product) {

      res.status(404).json({ message: 'Product not found'});
    }
    else {
      res.status(200).json(product);
    }
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});


// CREATE
router.post('/', (req, res, next) => {
  Movie.forge(req.body).save().then( (movie) => {
    res.json(movie);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE
router.put('/:id', (req, res, next) => {
  Movie.forge({'id': req.params.id}).save(req.body).then( (movie) => {
    res.json(movie);
  }).catch( (err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DESTROY
router.delete('/:id', (req, res, next) => {
  Movie.where({id: req.params.id}).fetch().then( (movie) => {
    if (!movie) {
      res.status(404).json({ message: 'Movie not found'});
    }
    else {
      movie
      .destroy()
      .then( (movie) => {
        res.json(movie);
      }).catch( (err) => {
        console.log(err);
        res.status(500).json();
      });
    }
  });
});


module.exports = router;
