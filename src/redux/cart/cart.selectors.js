import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItemsS
);

const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce((accumulatedQuantity, cartItem) => {
        return accumulatedQuantity + cartItem.quantity
    }, 0)
);

export {
    selectCartItems,
    selectCartItemsCount
};