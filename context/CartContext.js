"use client"
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    function addToCart(product, quantity){
        let parsedProduct={...product, quantity:quantity};
        let newCart = [...cart];
         let productFoundInd =newCart.findIndex((item) => 
         {return item._id===product._id})
          if (productFoundInd!==(-1)){
            newCart[productFoundInd].quantity=quantity;
            setCart(newCart);
          }else{
            newCart.push(parsedProduct);
            setCart(newCart);
          }
    }

    function removeItem(itemId){
      let newCart = [...cart];
      let productFoundInd =newCart.findIndex((item) => 
      {return item._id===itemId})
      if (productFoundInd!==(-1)){
        newCart.splice(productFoundInd,1)
        setCart(newCart);
      }else{
        console.log("el producto no esta en el carrito")
      }
    }

    function itemsInCart() {
      let total = 0;
      for (let i=0; i<cart.length ;i++){
        total=cart[i].quantity+total;
      }

      return total;
    }

    function totalCart(){
      let total=0;
      let subtotal=0;

      cart.forEach(element => {
        subtotal=parseFloat(element.subtotal1);
        total=total+subtotal;
      });
      return total.toFixed(2);
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

    function clear(){
      setCart([]);
    }

    function isInCart(id){
      let found= cart.findIndex((item)=> item._id===id)
      return found;
    }

    function priceToNumber(price){
      let stringPrecio=price.replace('.','')
      stringPrecio=stringPrecio.replace(/,/, '.')
      let precio=stringPrecio.slice(1,stringPrecio.length)
      return Number(precio);
    }

    function priceToString(price){
      let precio="$"+`${price.toString()},00`
      return precio;
    }
    return (
        <CartContext.Provider value={{
            addToCart, 
            removeItem, 
            itemsInCart, 
            clear, 
            isInCart, 
            totalCart,
            subtotal,
            priceToString,
            priceToNumber,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}
