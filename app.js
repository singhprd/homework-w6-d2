// Shopping Basket Lab
// We need to find the price of a shopping basket. A shopping basket can have multiple items. It should be able to add and remove items.

// Discounts:

// 10% discount for all shopping baskets over £20
// If the customer has a valid discount card then they get and additional 5% off.
// Extension (hard!) Add the ability to have buy one get one free items.

var checkout = {
  basket: [
  {
    item: "Beans",
    price: 3
  },
  {
    item: "Carrots",
    price: 5
  },
  {
    item: "Pizza",
    price: 10
  },
  {
    item: "Milk",
    price: 1
  }],
  customer: "Peter",
  discountCard: false,
  total: function() {
    total = 0;
    for (each in this.basket) {
    total = this.basket[each].price + total;
    }
    if (total > 20 ) {
      total = total * 0.9;
      total = total.toFixed(2);
    }
    if (this.discountCard) {
      total = total * 0.95;
      total = total.toFixed(2);
    }
    return total;
  }
}

module.exports = checkout;


console.log(checkout.total())





// var shoppingBasket = [
// {
//   item: "Beans",
//   price: 3
// },
// {
//   item: "Carrots",
//   price: 5
// },
// {
//   item: "Pizza",
//   price: 10
// },
// {
//   item: "Milk",
//   price: 1
// },
// ]
// console.log(shoppingBasket)

// shoppingBasket.push( { item: "batman", price: 122} );

// var total = 0;
// for (each in shoppingBasket) {
//   // console.log( shoppingBasket[each].price );
//   total = shoppingBasket[each].price + total;
// }

// if (total > 20) {
//   total = total * 0.8;
//   total = total.toFixed(2);
// }

// var discountCard = false;
// if ( discountCard === true ) {
//   total = total * 0.95;
//   total = total.toFixed(2);
// }

// console.log(total)