import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

// selectors

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors' 

// components
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => {
                return <CheckoutItem key={cartItem._id} cartItem={cartItem} />
            })
        }
        <div className='total'>
            <span>Total: ${total}</span>
        </div>
        <div className='test-warning'>
            <p>
               <strong> * Please use the following test credit card for payments * </strong>
            </p>
            <p>
                4242 4242 4242 4242 4242
            </p>
            <p>
                Exp: 01/23  CCV: 123
            </p>
        </div>
        <StripeCheckoutButton price={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);