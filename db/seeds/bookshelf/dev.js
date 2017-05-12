const Product = require('../../../models/product');


  Product.where('id', '!=', 0).destroy()
  .then( () => ([
      // CREATE some items
      Product.forge( { manufacture: 'Suncoast', product_description: 'Naples Grey 4-Piece All-Weather Wicker Patio Set', retail_cost: 1350.00, on_hand: 4}).save(),
      Product.forge( { manufacture: 'Tropical Settings', product_description: 'Gabriel Bronze 4-Piece Espresso Patio Deep Seating Set', retail_cost: 750.00, on_hand: 6}).save(),
      Product.forge( { manufacture: 'Dalton Carpet', product_description: 'Charisma Butter Pecan 8 x 10 Area Rug', retail_cost: 245.00, on_hand: 12}).save(),
      Product.forge( { manufacture: 'Shaw', product_description: 'Rush Brown/Beige 9 x 13 Area Rug', retail_cost: 1560.00, on_hand: 2}).save(),
      Product.forge( { manufacture: 'Dalton Carpet', product_description: 'Charisma Butter Pecan 8 x 10 Area Rug', retail_cost: 245.00, on_hand: 12}).save(),
      

    ]))
  .then( () => {
    // GET all of the items
      return Product.forge().orderBy('id').fetchAll();
  })
  .then( products => {
    console.log(products.toJSON());
    process.exit();
  })
  .catch( err => {
    console.error(err);
    process.exit(1);
  });


//  DEMO SCRIPT#  insert into product (manufacture, product_description, retail_cost, on_hand)
//  DEMO SCRIPT#  values ('Charleston', 'Martha Stewart Conversation Set', '1200.00', '5');
