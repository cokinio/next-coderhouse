"use client"
import { useState,useEffect } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "../../context/CartContext"
import Link from "next/link"

const QuantSel = ({ item }) => {
    const [quantity, setQuantity] = useState(1)
    const [flag, setFlag] = useState(0)
    const { addToCart, isInCart, subtotal,cart } = useCartContext()
    useEffect(()=>{reestablecerCantidad()
      },[]);

    const handleAdd = () => {
        let subtotal1=subtotal(item.price,quantity)
        let item1= {...item,subtotal1}
        addToCart(item1,quantity)
    }

    const reestablecerCantidad= ()=>{
    let encontrado=isInCart(item._id);
    console.log(encontrado)
    if (encontrado!=-1){
        setQuantity(cart[encontrado].quantity)
        setFlag(1);
    }
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            {(flag!=0)
            ?
            <Link
                href={"/carrito"}>
                    <Boton className="w-full bg-green-200" onClick={handleAdd}>Actualizar al carrito</Boton>
                </Link>
            :
            <Boton className="w-full" onClick={handleAdd}>Agregar al carrito</Boton>
            }
        </div>
    )
}

export default QuantSel 