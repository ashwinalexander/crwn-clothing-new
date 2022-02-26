//function that takes in existing items and item to add and returns a new spread list of items along with quantities
export const addItemToCart = (cartItems, cartItemToAdd) => {
  //1. checks if the item we are trying to add already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //2 If it exists, map through each item and increase the qty on the item that matches
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //2. If it does not exist, for example the first time around then, just say qty is 1. But remember to spread it because we need to send a new state object to trigger change detection for Redux
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

//check if quantity is 1, then we need to remove it, otherwise if it is greater than 1, decrease quantity by 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  //this is likely always cartItems to be true since you can only remove an item if it already exists
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
