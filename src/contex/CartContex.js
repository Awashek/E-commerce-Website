
import { createContext, useContext } from "react";

export const CartContext = createContext({
    cart: [
        {},
        {},
        {},
    ],
    handleAddToCart: () => {},
    handleRemoveFromCart: () => {},
    handleDecrement:() => {},
})

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = CartContext.Provider;

