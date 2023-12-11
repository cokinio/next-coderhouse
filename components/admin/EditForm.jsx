"use client"

import { useState,useEffect  } from "react"
import Boton from "../ui/Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from "@/firebase/config"

const updateProduct = async (values, file) => {
    let id=Date.now().toString()+values.title.trim();
    const storageRef = ref(storage,id )
    const fileSnapshot = await uploadBytes(storageRef,file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)
    console.log(fileURL)
    let _datos={
        title:values.title,
        image: fileURL,
        price:"$"+`${values.price.toString()},00`,
        category:values.category,
        stock:values.stock,
        description:values.description
    }
    let productCreated = await fetch(`http://localhost:3000/api/product/`, {
        method: "PUT",
        body: JSON.stringify(_datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then(res => res.json())
    console.log(productCreated)
}


const EditForm = ({item}) => {
    console.log(item)
    let product= getProductInfo(item)
    console.log(product)
    const { title, image, price, category, stock, description } = product
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
        await updateProduct(item.slug, values, file)
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

                <label>Imagen: </label>
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