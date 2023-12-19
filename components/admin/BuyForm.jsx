"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/firebase/config"
import { useCartContext } from "../../context/CartContext"

const BuyForm = (product) => {
    const  {cart} = useCartContext()
    console.log(cart)
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
        await postCart(values)
        window.location.href = "/admin";

    }

    const postCart = async (values, file) => {


        try{
            let res = await fetch(encoded, {
                method: "PUT",
                body: JSON.stringify(_datos),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            productupdated = await res.json()
            console.log(productupdated)
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