"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { useCartContext } from "../../context/CartContext"

const BuyForm = (product) => {
    const  {cart} = useCartContext()
    let user={
        nombre:"",
        apellido:"",
        email:""
    }
    const [values, setValues] = useState(user)
 

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let id= await postCart(values,cart)
        window.location.href = `${process.env.NEXT_PUBLIC_HOST}/yourorder/${id}`;

    }

    const postCart = async (values, cart) => {
        try{
            let carrito= cart.map((product)=>({pid:product._id,quantity:product.quantity}))
            console.log(carrito)
            let _datos={
                nombre:values.nombre,
                apellido:values.apellido,
                email:values.email,
                products:carrito
            } 
            console.log(_datos)          
            let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/cart/`, {
                method: "POST",
                body: JSON.stringify(_datos),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            let cartCreated = await res.json()
            console.log(cartCreated)
            return cartCreated.id;
        }catch(error){
            console.log(error)
        }
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                        
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.nombre}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="nombre"
                    onChange={handleChange}
                />

                <label>Apellido: </label>
                <input
                    type="text"
                    value={values.apellido}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="apellido"
                    onChange={handleChange}
                />

                <label>email: </label>
                <input
                    type="email"
                    value={values.email}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />

                <Boton type="submit">comprar</Boton>
            </form>
        </div>
    )
}


export default BuyForm