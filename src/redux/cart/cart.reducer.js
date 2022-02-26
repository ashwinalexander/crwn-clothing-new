//reducer = PURE function that gets two properties (state object representing last or initial state, and action = type and payload )
//every reducer gets every single action that gets fired EVEN if those actions are not related to the reducer
//similar to initialise state

//think of this as a getter action
import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INTIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, //stuff that is already in the state
        hidden: !state.hidden,
      };

    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...state, //stuff that is already in the state
        // cartItems: [...state.cartItems, action.payload], (used this before we setup the utils function)
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state, //stuff that is already in the state
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default cartReducer;
