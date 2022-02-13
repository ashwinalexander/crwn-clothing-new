//reducer = PURE function that gets two properties (state object representing last or initial state, and action = type and payload )
//every reducer gets every single action that gets fired EVEN if those actions are not related to the reducer
//similar to initialise state

//think of this as a getter action
import { CartActionTypes } from './cart.types';

const INTIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state, //stuff that is already in the state
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
