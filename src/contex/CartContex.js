
import { createContext, useContext } from "react";

export const CartContext = createContext({
    cart: [
        {},
        {},
        {},
    ],
    //functions
})

export const useCart = () => {
    return useContext(CartContext)
}

export const CartProvider = CartContext.Provider;

