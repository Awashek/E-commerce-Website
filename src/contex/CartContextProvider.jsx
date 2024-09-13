import React from 'react'
import { useState } from 'react'
import CartContext from './CartContex'

export default function CartContextProvider({children}) {
    const [cart, setCart] = useState([])

    const addToCart = ({product}) => {
        setCart(prev => [...prev, product])
    }

    const removeFromCart = ({product}) => {
        console.log("remove from cart" , product)
    }
    return (
        <CartContext.Provider calues={{cart, addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
