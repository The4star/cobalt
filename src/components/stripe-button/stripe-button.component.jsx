import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8CTCd5mVxUrMvpbjDORG5TGt00l7O9G9LE';

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
            currency='AUD'
            label='Pay Now'
            name='Cobalt'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    )
}

export default StripeCheckoutButton;