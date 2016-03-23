// Shopping Basket Lab
// We need to find the price of a shopping basket. A shopping basket can have multiple items. It should be able to add and remove items.

// Discounts:

// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get and additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.

var assert = require('chai').assert;
var checkout = require('../app.js');

describe('Checkout', function() {
  it('should have customer', function() {
    assert.equal( "Peter", checkout.customer );
    });

  it('should add basket', function() {
    assert.equal( 19, checkout.total() )
  });

  it('should discount 5% with card', function() {
    checkout.discountCard = true;
    assert.equal( 18.05, checkout.total())
  });
});

