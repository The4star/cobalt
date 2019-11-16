import React from 'react';
import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8CTCd5mVxUrMvpbjDORG5TGt00l7O9G9LE';

    const onToken = async (token) => {
        try {
            const response = await axios.post('/payment', {
                amount: priceForStripe,
                token
            });

            const data = response.data;

            if (data.error) {
                console.log('Payment error:', data.error)
                alert('There was an issue with your payment, make sure you use the test credit card provided.')
            } else {
                alert('Payment Successful!')
            }

        } catch (error) {
            
        }

        


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