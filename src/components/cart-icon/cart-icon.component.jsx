import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

//this just has the cart icon

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

//this is a selector = pulls in the full state and then uses only a slice of that state
// const mapStateToProps = (state) => {
//   //if the cart items don't actually change and if the output of selector doesn't change we don't want to rerender
//   return {
//     //  itemCount: cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0),
//     itemCount: selectCartItemsCount(state),
//   };
// };

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

//dispatch = whatever object you are passing me is going to be an action object I will pass to every reducer
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
