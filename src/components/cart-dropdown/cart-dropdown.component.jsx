//this is for the cart dropdown that will have cart items and the go to checkout option

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//using Redux selectors (compare with another one used in the cart icon component below)
//makes sure that this dropdown only gets re-rendered when state changes specific to it happen.
//unrelated state changes will not trigger a re-render
// const mapStateToProps = (state) => ({
//   cartItems: selectCartItems(state),
// });

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// //this is a selector = pulls in the full state and then uses only a slice of that state
// const mapStateToProps = (state) => {
//   //if the cart items don't actually change and if the output of selector doesn't change we don't want to rerender
//   return {
//     //  itemCount: cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0),
//     itemCount: selectCartItemsCount(state),
//   };
// };

//all higher order components return components but also take components as their arguments
//evaluates from inside out so order matters - withRouter will give us access to match and history
export default withRouter(connect(mapStateToProps)(CartDropdown));
