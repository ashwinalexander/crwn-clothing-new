import SHOP_DATA from '../../pages/shop/shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

//default ES6 feature meaning that if state is ever undefined it will fall back and leverage the default state
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
