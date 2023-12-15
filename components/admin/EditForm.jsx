"use client"
import Image from "next/image"
import { useState,useEffect  } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/firebase/config"
import { useCartContext } from "../../context/CartContext"



const EditForm = (product) => {
    const  {priceToNumber,priceToString} = useCartContext()
    console.log(product)
    console.log(product.item.price)
    let price= priceToNumber(product.item.price) 
    console.log(price)
    const { title, image, category, stock, description } = product.item;
    console.log(title)
    const [values, setValues] = useState({ title, image, price, category, stock, description })
    const [file, setFile] = useState(null)


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateProduct(values, file)
        window.location.href = "/admin";

    }

    const updateProduct = async (values, file) => {
        let _datos={};
        if (file!=null){
            let id=Date.now().toString()+values.title.trim();
            const storageRef = ref(storage,id )
            const fileSnapshot = await uploadBytes(storageRef,file)
            const fileURL = await getDownloadURL(fileSnapshot.ref)
            console.log(fileURL)
            _datos.image=fileURL;
        }
        
        _datos.title=values.title
        _datos.price=priceToString(values.price)
        _datos.category=values.category
        _datos.stock=values.stock
        _datos.description=values.description
        
        let encoded = encodeURI(`${process.env.HOST}/api/product/${product.item.title}`);
        console.log(encoded)
        let productupdated = await fetch(encoded, {
            method: "PUT",
            body: JSON.stringify(_datos),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }).then(res => res.json())
        console.log(productupdated)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                        
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />
                <label>Imagen actual: </label>
                <Image className="mb-10"
                        src={values.image}
                        alt={values.title}
                        width={240}
                        height={240}
                    />

                <label>Si desea cambiar la imagen seleccione un archivo: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.category}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="category"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}


export default EditForm