import React from 'react';
import { withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, toggleCartHidden}) => (
    <div className='cart-dropdown'> 
        <div className='cart-items'>
            {   
                cartItems.length ? (
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem._id} item={cartItem} />
                    })
                ) :
                <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout')
            toggleCartHidden()
        }} >Go to Checkout</CustomButton>
    </div> 
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));