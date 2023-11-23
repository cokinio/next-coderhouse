"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "../../context/CartContext"
import Link from "next/link"

const QuantSel = ({ item }) => {
    const [quantity, setQuantity] = useState(1)
    const { addToCart, isInCart, subtotal } = useCartContext()
    
    const handleAdd = () => {
        console.log(item.Price1)
        console.log(quantity)
        let subtotal1=subtotal(item.Price1,quantity);
        console.log(subtotal1)
        addToCart({
            ...item,
            quantity,
            subtotal1
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
        {
            isInCart(item.slug)
                ?   <Link
                        href={"/cart"}
                        className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                        Terminar mi compra
                    </Link>
                :   <>
                        <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                        <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
                    </>
        }
        </div>
    )
}

export default QuantSel 