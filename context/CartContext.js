"use client"
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isInCart = (slug) => {
        return cart.some(item => item.slug === slug)
    }

    const totalQty = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    function subtotal(price,cant){
        let total=0;
        let stringPrecio=price;
        stringPrecio=stringPrecio.replace('.','')
        stringPrecio=stringPrecio.replace(/,/, '.')
        let precio=stringPrecio.slice(1,stringPrecio.length)
        total=precio*cant;
        return total.toFixed(2);
      }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            totalQty,
            emptyCart,
            subtotal
        }}>
            {children}
        </CartContext.Provider>
    )
}
