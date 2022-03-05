import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 109; //price in cents
  const publishableKey =
    'pk_test_51Ka3qXJoAXYlQ128TkV9cBtBLzJlQcKbE9RV37W5WTi6T6YNG8og3LwoBIhHiB4vaDgDovVVlLIKWAmPirCnkWoy00GoXFTu4a';

  const onToken = (token) => {
    console.log(token);
    alert('payment successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
