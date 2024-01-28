let cartItems = [];

// Problem 1:
// Create a function that can add an item to the cart or increase quantity of a cart item by 1
// TEST CASES:
// addItem('keyboard') -> updates cart to: [{name: 'keyboard', quantity:1 }]
// addItem('keyboard') -> updates cart to: [{name: 'keyboard', quantity:2 }]
// addItem('book') -> updates cart to: [{name: 'book', quantity: 1}, {name: 'keyboard', quantity:2}]
// addItem('book') -> updates cart to: [{name: 'book', quantity: 2}, {name: 'keyboard', quantity:2}]
// addItem('table') -> updates cart to: [{name: 'book', quantity: 2}, {name: 'keyboard', quantity:2},{name: 'table', quantity:1}]
// addItem('table') -> updates cart to: [{name: 'book', quantity: 2}, {name: 'keyboard', quantity:2},{name: 'table', quantity:2}]

// Problem 2:
// Create a function that can decrease quantity of a cart item or delete the item if the existing quantity is 1
// removeItem('keyboard') -> updates cart to: [{name: 'keyboard', quantity:1},{name: 'book', quantity: 2},{name: 'table', quantity:2}]
// removeItem('keyboard') -> updates cart to: [{name: 'book', quantity: 2},{name: 'table', quantity:2}]

// Problem 3:
// Create a function that can remove an item completely from the cart
// removeItem('book') -> updates cart to: [{name: 'table', quantity:2}]
