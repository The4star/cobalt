const addItemToCart = (cartItems, cartItemToAdd) => {    
    
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem._id === cartItemToAdd._id
    });

    if (existingCartItem) {   
        return cartItems.map(cartItem => {
           return cartItem._id === cartItemToAdd._id 
            ? {...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem  
        });
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

const removeItemFromCart = (cartItems, cartItemToRemove ) => {
    const existingCartItem = cartItems.find(cartItem => {
        return cartItem._id === cartItemToRemove._id
    });     

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => {
            return cartItem._id !== cartItemToRemove._id
        });
    };

    return cartItems.map(cartItem => {
        return cartItem._id === cartItemToRemove._id 
        ? {...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    });


}

export {
    addItemToCart,
    removeItemFromCart
}